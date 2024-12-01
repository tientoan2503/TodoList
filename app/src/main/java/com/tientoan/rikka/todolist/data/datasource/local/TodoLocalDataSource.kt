package com.tientoan.rikka.todolist.data.datasource.local

import com.tientoan.rikka.todolist.data.database.dao.TodoDao
import com.tientoan.rikka.todolist.data.di.AppCoroutineDispatchers
import com.tientoan.rikka.todolist.domain.model.Todo
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.withContext
import javax.inject.Inject

interface TodoLocalDataSource {
  fun observeAll(): Flow<Result<List<Todo>>>
  fun observeId(id: Int): Flow<Result<Todo?>>
  suspend fun insert(todo: Todo): Result<Long>
  suspend fun update(todo: Todo): Result<Unit>
  suspend fun delete(todo: Todo): Result<Unit>
}

class TodoLocalDataSourceImpl @Inject constructor(
  private val dispatchers: AppCoroutineDispatchers,
  private val todoDao: TodoDao,
) : TodoLocalDataSource {
  override fun observeAll(): Flow<Result<List<Todo>>> {
    return todoDao.observeAll().map { Result.success(it) }.catch { emit(Result.failure(it)) }
  }

  override fun observeId(id: Int): Flow<Result<Todo?>> {
    return todoDao.observeById(id).map { Result.success(it) }.catch { emit(Result.failure(it)) }
  }

  override suspend fun insert(todo: Todo): Result<Long> {
    return withContext(dispatchers.io) { runCatching { todoDao.insert(todo) } }
  }

  override suspend fun update(todo: Todo): Result<Unit> {
    return withContext(dispatchers.io) { runCatching { todoDao.update(todo) } }
  }

  override suspend fun delete(todo: Todo): Result<Unit> {
    return withContext(dispatchers.io) { runCatching { todoDao.delete(todo) } }
  }

}