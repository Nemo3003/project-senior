const mysql = require('mysql2/promise');
jest.mock('mysql2/promise');

const { DB_URI } = require('../db/config.js');
const pool = require('../db/db.js');

describe('Database Connection', () => {
  test('should return undefined', async () => {
    const mockPool = undefined;
    mysql.createPool.mockReturnValue(mockPool);

    const connection = await pool;

    expect(mysql.createPool).toHaveBeenCalledWith(DB_URI);
    expect(connection).toBe(mockPool);
  });
});
