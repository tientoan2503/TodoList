package com.tientoan.rikka.data.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "todo")
data class TodoEntity(
  @PrimaryKey(autoGenerate = true)
  val id: Int,
  @ColumnInfo("title")
  val title: String,
  @ColumnInfo("description")
  val description: String,
  @ColumnInfo("dateTime")
  val dateTime: Long,
  @ColumnInfo("isComplete")
  val isComplete: Boolean,
)