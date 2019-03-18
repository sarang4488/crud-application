module.exports = (sequelize, type) => {
  return sequelize.define(
    "STUDENT",
    {
      uid: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      student_name: { type: type.STRING, allowNull: false },
      counsellor_name: { type: type.STRING, allowNull: false },
      hours: {
        type: type.INTEGER
      },
      role: { type: type.STRING, allowNull: false },
      joining_date: { type: type.DATE, allowNull: false }
    },
    {
      freezeTableName: true
    }
  );
};
