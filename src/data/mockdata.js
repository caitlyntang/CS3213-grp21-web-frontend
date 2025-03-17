export const bugs_info = [
    {
      "id": 3943,
      "date": "2025-02-18",
      "database": "db1",
      "version": "v4.4.3",
      "seed": 8521899119296
    },
    {
      "id": 3510,
      "date": "2025-02-25",
      "database": "db1",
      "version": "v5.7.5",
      "seed": 4183837448633
    },
    {
      "id": 7351,
      "date": "2025-03-16",
      "database": "db4",
      "version": "v3.6.8",
      "seed": 7492144376684
    },
    {
      "id": 1979,
      "date": "2025-02-19",
      "database": "db3",
      "version": "v10.8.1",
      "seed": 2026903734964
    },
    {
      "id": 7201,
      "date": "2025-03-02",
      "database": "db3",
      "version": "v10.3.4",
      "seed": 6996187155777
    }
  ]
  
  export const logs = `PRAGMA cache_size = 50000; -- 0ms;
  PRAGMA temp_store=MEMORY; -- 0ms;
  PRAGMA synchronous=off; -- 0ms;
  PRAGMA case_sensitive_like=ON; -- 0ms;
  CREATE VIRTUAL TABLE rt0 USING rtree_i32(c0, c1, c2); -- 15ms;
  CREATE VIRTUAL TABLE vt1 USING fts4(c0 UNINDEXED); -- 3ms;
  INSERT OR REPLACE INTO vt1(c0) VALUES (-253704356); -- 0ms;
  INSERT OR IGNORE INTO rt0(c0) VALUES (0.2805967986803618); -- 0ms;
  BEGIN  TRANSACTION; -- 0ms;
  REINDEX  vt1; -- 0ms;
  INSERT OR FAIL INTO rt0(c1) VALUES (NULL); -- 0ms;
  BEGIN  TRANSACTION; -- 0ms;
  PRAGMA optimize; -- 0ms;
  INSERT OR IGNORE INTO rt0(c1, c0) VALUES (NULL, '-253704356'); -- 0ms;
  INSERT INTO vt1(vt1) VALUES('integrity-check'); -- 0ms;
  COMMIT; -- 0ms;
  REINDEX; -- 0ms;
  COMMIT TRANSACTION; -- 0ms;
  ROLLBACK TRANSACTION; -- 0ms;
  INSERT OR IGNORE INTO vt1(c0) VALUES (NULL); -- 0ms;
  UPDATE rt0 SET c0=0x4539fa69, c2='TP', c1=-253704356; -- 0ms;
  UPDATE OR IGNORE vt1 SET (c0)=(x''); -- 0ms;
  END TRANSACTION; -- 0ms;
  PRAGMA main.foreign_keys = false; -- 0ms;`
  