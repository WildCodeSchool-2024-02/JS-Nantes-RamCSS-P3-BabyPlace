/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the favorite class (AbstractRepository)
    // and pass the table name "favorite" as configuration
    super({ table: "favorite" });
  }

  // The C of CRUD - Create operation
  async create(parent_id, nursery_id) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (
      parent_id, nursery_id) values (?, ?)`,
      [parent_id, nursery_id]
    );

    // Return the ID of the newly inserted favorite
    return rows;
  }

  // The Rs of CRUD - Read operations

  async read(nursery_id) {
    // Execute the SQL SELECT query to retrieve a specific favorite by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where nursery_id = ?`,
      [nursery_id]
    );

    // Return the first row of the result, which represents the favorite
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all favorites from the "favorite" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of favorites
    return rows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to remove an item by its ID
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    // Return a boolean indicating whether the deletion was successful
    return row;
  }
}

module.exports = FavoriteRepository;
