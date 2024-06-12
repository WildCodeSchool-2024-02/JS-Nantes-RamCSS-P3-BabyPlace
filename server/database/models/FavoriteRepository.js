const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the favorite class (AbstractRepository)
    // and pass the table name "favorite" as configuration
    super({ table: "favorite" });
  }

  // The C of CRUD - Create operation

  async create(favorite) {
    // Execute the SQL INSERT query to add a new nursert to the "favorite" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [favorite.title, favorite.user_id]
    );

    // Return the ID of the newly inserted favorite
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific favorite by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
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

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(favorite) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = FavoriteRepository;
