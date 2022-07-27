module.exports = (sequelize, DataTypes) => {
  const PetPic = sequelize.define(
    "PetPic",
    {
      //   id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     autoIncrement: true,
      //     primaryKey: true,
      //   },
      AnimalPicture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true, paranoid: true }
  );

  PetPic.associate = (models) => {
    PetPic.belongsTo(models.Pet, {
      foreignKey: {
        name: "petId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };

  return PetPic;
};
