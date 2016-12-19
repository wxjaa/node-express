/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('department', {
		departmentId: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		parentDepartmentId: {
			type: DataTypes.CHAR(36),
			allowNull: true
		},
		sort: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'department'
	});
};
