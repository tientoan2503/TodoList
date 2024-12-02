package com.tientoan.rikka.domain.repository

import com.tientoan.rikka.domain.model.Todo
import kotlinx.coroutines.flow.Flow

interface TodoRepository {
  fun observeAll(): Flow<Result<List<Todo>>>
  fun observeId(id: Int): Flow<Result<Todo?>>
  suspend fun insert(todo: Todo): Result<Long>
  suspend fun update(todo: Todo): Result<Unit>
  suspend fun delete(todo: Todo): Result<Unit>
}