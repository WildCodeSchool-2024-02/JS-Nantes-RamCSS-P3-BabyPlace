/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the reservation class (AbstractRepository)
    // and pass the table name "reservation" as configuration
    super({ table: "reservation" });
  }

  // The C of CRUD - Create operation
  async create( reservation_date, reservation_status, status_date, arriving_date, exit_date, price, nursery_id, child_id ) {
    const [rows] = await this.database.query(`INSERT INTO ${this.table} (
      reservation_date, reservation_status, status_date, arriving_date, exit_date, price, nursery_id, child_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [reservation_date, reservation_status, status_date, arriving_date, exit_date, price, nursery_id, child_id]);
    // Return the ID of the newly inserted reservation
    return rows.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific reservation by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
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
  async update(body) {
    const { reservation_date, reservation_status, status_date, arriving_date, exit_date, price, nursery_id, child_id, id } = body;
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET reservation_date = ?, reservation_status = ?, status_date = ?, arriving_date = ?, exit_date = ?, price = ?, nursery_id = ?, child_id = ? WHERE id = ?`,
      [ reservation_date, reservation_status, status_date, arriving_date, exit_date, price, nursery_id, child_id, id ]
    );

    // Return a boolean indicating whether the deletion was successful
    return row;
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

module.exports = ReservationRepository;
