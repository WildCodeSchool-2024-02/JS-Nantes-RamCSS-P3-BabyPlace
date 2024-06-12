const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the reservation class (AbstractRepository)
    // and pass the table name "reservation" as configuration
    super({ table: "reservation" });
  }

  // The C of CRUD - Create operation

  async create(reservation) {
    // Execute the SQL INSERT query to add a new nursert to the "reservation" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [reservation.title, reservation.user_id]
    );

    // Return the ID of the newly inserted reservation
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific reservation by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the reservation
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all reservations from the "reservation" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of reservations
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ReservationRepository;
