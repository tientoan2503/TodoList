package com.tientoan.rikka.data.repository

import com.tientoan.rikka.data.datasource.local.TodoLocalDataSource
import com.tientoan.rikka.domain.model.Todo
import com.tientoan.rikka.domain.repository.TodoRepository
import kotlinx.coroutines.flow.Flow
import javax.inject.Inject

class TodoRepositoryImpl @Inject constructor(
  private val localDataSource: TodoLocalDataSource
) : TodoRepository {
  override fun observeAll(): Flow<Result<List<Todo>>> = localDataSource.observeAll()

  override fun observeId(id: Int): Flow<Result<Todo?>> = localDataSource.observeId(id)

  override suspend fun insert(todo: Todo): Result<Long> = localDataSource.insert(todo)

  override suspend fun update(todo: Todo): Result<Unit> = localDataSource.update(todo)

  override suspend fun delete(todo: Todo): Result<Unit> = localDataSource.delete(todo)
}