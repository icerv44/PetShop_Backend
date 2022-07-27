module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Gender: {
        type: DataTypes.ENUM({
          values: ["Male", "Female", "None"],
        }),
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

      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePic: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
      },
    },
    { underscored: true, paranoid: true }
  );

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };

  return User;
};
