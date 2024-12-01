package com.tientoan.rikka.todolist.data.database.dao

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update
import com.tientoan.rikka.todolist.domain.model.Todo
import kotlinx.coroutines.flow.Flow

@Dao
interface TodoDao {

  @Insert(onConflict = OnConflictStrategy.IGNORE)
  suspend fun insert(todo: Todo): Long

  @Insert
  suspend fun insertTodos(todo: List<Todo>)

  @Update
  suspend fun update(todo: Todo)

  @Delete
  suspend fun delete(todo: Todo)

  @Query("SELECT * FROM todo")
  fun observeAll(): Flow<List<Todo>>

  @Query("SELECT * FROM todo WHERE id = :id")
  fun observeById(id: Int): Flow<Todo?>
}