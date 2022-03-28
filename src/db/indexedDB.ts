import { IPlayer } from '../common/interfaces';

export default class DataBase {
  public db: IDBDatabase | null;
  // private iDB = window.indexedDB;

  constructor() {
    this.db = null;
  }

  init(dbName: string, version?: number): void {
    const iDB = window.indexedDB;
    if (!iDB) {
      console.log("Your browser doesn't support IndexedDB");
    }
    const openRequest = iDB.open(dbName, version);
    openRequest.onupgradeneeded = () => {
      const database = openRequest.result;
      const store = database.createObjectStore('matchPlayers', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('id', 'id');
      store.createIndex('firstName', 'firstName');
      store.createIndex('lastName', 'lastName');
      store.createIndex('email', 'email');
      store.createIndex('score', 'score');
      this.db = database;
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;

      // database = e.target.result;
    };
  }

  addPlayer(playerInfo: IPlayer): Promise<IPlayer> {
    return new Promise((resolve, reject) => {
      let transResult: IPlayer;
      let res: IDBRequest;

      this.readAll().then((array) => {
        // console.log('arr frm IDB', array.length);
        const transaction = this.db.transaction('matchPlayers', 'readwrite');

        transaction.oncomplete = () => {
          // console.log('complete........');
          resolve(transResult);
        };

        const store = transaction.objectStore('matchPlayers');

        if (array.length === 0) {
          res = store.add(playerInfo);
        } else {
          res = store.put(playerInfo);
        }

        res.onsuccess = () => {
          transResult = playerInfo;

          // console.log('store add new player', res.source);

          // console.log('complete', res.result);
        };

        transaction.onerror = () => {
          reject(console.log('DB addItem error', transaction.error));
        };
      });
    });
  }

  addItem<RecordType>(
    collection: string,
    itemInfo: RecordType,
  ): Promise<RecordType> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(collection, 'readwrite');
      let transResult: RecordType;

      transaction.oncomplete = () => {
        // console.log('complete........');
        resolve(transResult);
      };

      const store = transaction.objectStore(collection);

      // to add new item to db
      // store.add({ id: 1, name: 'namesOneample', score: 25 });

      // store.add({ id: 2, name: 'nameTWO sample', score: 0 });

      // store.add({ fsdg: 34, name: 'namesample', email: 'c' });
      const res = store.add({});

      res.onsuccess = () => {
        const itemId = res.result;

        const newRecord: RecordType = { ...itemInfo, id: itemId };
        transResult = newRecord;

        const result = store.put(newRecord);

        // console.log('store put new player', result);

        result.onsuccess = () => {
          // console.log('complete', result.result);
        };

        transaction.onerror = () => {
          reject(console.log('DB addItem error', result.error));
        };
      };
    });
  }

  // writeTime(playerId: number, playerTime: number, name?: string): Promise<> {
  writeScore(
    playerId: number,
    playerScore: number,
  ): Promise<IDBTransaction | number> {
    return new Promise((res, rej) => {
      const transaction = this.db.transaction('matchPlayers', 'readwrite');

      const store = transaction.objectStore('matchPlayers');

      // to amend item in db
      // store.put({ id: 2, name: 'nameTWO sample', score:  50 });
      const result = store.put({ id: playerId, score: playerScore });

      result.onsuccess = () => {
        console.log(`complete adding player time = '${playerScore}'`, result.result);
      };

      transaction.oncomplete = () => {
        console.log('complete');
        res(playerScore);
      };

      transaction.onerror = (e) => rej(console.log('DB error', e.target));
      transaction.onabort = () => console.log('abort');
    });
  }

  readAll(): Promise<Array<IPlayer>> {
    return new Promise((res, rej) => {
      const transaction = this.db.transaction('matchPlayers', 'readonly');

      const store = transaction.objectStore('matchPlayers');

      const result = store.getAll();

      transaction.oncomplete = () => {
        res(result.result);
      };

      transaction.onerror = () => {
        rej(console.log('DB readAll error', result.error));
      };

      // transaction.onabort = () => {
      //   console.log('abort');
      // };
    });
  }

  filterById(playerId: number): Promise<Array<IPlayer | null>> {
    return new Promise((res, rej) => {
      const transaction = this.db.transaction('matchPlayers', 'readonly');

      const store = transaction.objectStore('matchPlayers');

      // to sort data by id upsending
      const resData: Array<IPlayer | null> = [];
      const result = store.index('id').openCursor(null, 'next');
      result.onsuccess = () => {
        const cursor = result.result;
        if (cursor) {
          console.log('cursor', cursor.value);
          if (cursor.value.id === playerId) {
            resData.push(cursor.value);
          }
          cursor.continue();
        }
      };

      transaction.oncomplete = () => {
        console.log('complete filtering by player id', resData);
        res(resData);
      };

      transaction.onerror = (e) => {
        rej(console.log('DB error', e.target));
      };

      transaction.onabort = () => {
        console.log('abort');
      };
    });
  }

  filterByEmail(email: string): Promise<IPlayer | null> {
    return new Promise((res, rej) => {
      const transaction = this.db.transaction('matchPlayers', 'readonly');

      const store = transaction.objectStore('matchPlayers');

      // to sort data by player's email upsending
      // const resData: Array<IPlayer | null> = [];
      let playerExist = null;
      const result = store.index('id').openCursor(null, 'next');
      result.onsuccess = () => {
        const cursor = result.result;
        if (cursor) {
          console.log('cursor', cursor.value);
          if (cursor.value.email === email) {
            // resData.push(cursor.value);
            playerExist = cursor.value;
          }
          cursor.continue();
        }
      };

      transaction.oncomplete = () => {
        console.log('complete filtering by player id', playerExist);
        res(playerExist);
      };

      transaction.onerror = (e) => {
        rej(console.log('DB error', e.target));
      };

      transaction.onabort = () => {
        console.log('abort');
      };
    });
  }

  onPlayerDelete(playerId: number): Promise<IDBTransaction> {
    return new Promise((res, rej) => {
      const transaction = this.db.transaction('matchPlayers', 'readwrite');
      const store = transaction.objectStore('matchPlayers');

      const result = store.delete(playerId);

      transaction.oncomplete = () => {
        res(result.result);
      };

      transaction.onerror = (e) => rej(console.log('Error in DB', e.target));
    });
  }
}
