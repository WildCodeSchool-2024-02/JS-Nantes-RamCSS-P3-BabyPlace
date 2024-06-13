const AbstractRepository = require("./AbstractRepository");

class ParentRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "parent" as configuration
    super({ table: "parent" });
  }

  // The C of CRUD - Create operation

  async create(parent) {
    // Execute the SQL INSERT query to add a new nursert to the "parent" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [parent.title, parent.user_id]
    );

    // Return the ID of the newly inserted parent
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific parent by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the parent
    return rows;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all children from the "parent" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, parent) {
    // Execute the SQL UPDATE query to modify an existing parent in the "parent" table
    const [result] = await this.database.query(
      `update ${this.table} set title = ?, user_id = ? where id = ?`,
      [parent.title, parent.user_id, id]
    );

    // Return the number of affected rows
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to remove a parent by its ID
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return the number of affected rows
    return result.affectedRows;
  }
}

module.exports = ParentRepository;
