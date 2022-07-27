module.exports = (sequelize, DataTypes) => {
  const Distributor = sequelize.define(
    "Distributor",
    {
      DistributorName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
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
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      profilePic: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Rating: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
        allowNull: true,
      },
    },
    { underscored: true, paranoid: true }
  );

  Distributor.associate = (models) => {
    Distributor.hasMany(models.Pet, {
      foreignKey: {
        name: "distributorId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Distributor.hasMany(models.Order, {
      foreignKey: {
        name: "distributorId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };

  return Distributor;
};
