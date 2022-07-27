module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Gender: {
        type: DataTypes.ENUM({
          values: ["Male", "Female", "None"],
        }),
        validate: {
          notEmpty: true,
        },
      },
      BirthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ShippingPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      ShippingName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      detail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true, paranoid: true }
  );

  Pet.associate = (models) => {
    Pet.belongsTo(models.Distributor, {
      foreignKey: {
        name: "distributorId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Pet.hasMany(models.PetPic, {
      foreignKey: {
        name: "petId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Pet.hasMany(models.Order, {
      foreignKey: {
        name: "petId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Pet;
};
