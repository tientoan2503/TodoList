package com.tientoan.rikka.data.database

import androidx.room.Database
import androidx.room.RoomDatabase
import com.tientoan.rikka.data.database.dao.TodoDao
import com.tientoan.rikka.data.database.entity.TodoEntity

@Database(entities = [TodoEntity::class], version = 1)
abstract class TodoDatabase : RoomDatabase() {
  abstract fun todoDao(): TodoDao
}