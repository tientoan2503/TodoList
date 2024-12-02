package com.tientoan.rikka.data.database.dao

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update
import com.tientoan.rikka.data.database.entity.TodoEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface TodoDao {

  @Insert(onConflict = OnConflictStrategy.IGNORE)
  suspend fun insert(todoEntity: TodoEntity): Long

  @Insert
  suspend fun insertTodos(todoEntity: List<TodoEntity>)

  @Update
  suspend fun update(todoEntity: TodoEntity)

  @Delete
  suspend fun delete(todoEntity: TodoEntity)

  @Query("SELECT * FROM todo")
  fun observeAll(): Flow<List<TodoEntity>>

  @Query("SELECT * FROM todo WHERE id = :id")
  fun observeById(id: Int): Flow<TodoEntity?>
}