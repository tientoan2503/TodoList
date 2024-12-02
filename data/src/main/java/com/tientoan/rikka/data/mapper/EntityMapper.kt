package com.tientoan.rikka.data.mapper

import com.tientoan.rikka.data.database.entity.TodoEntity
import com.tientoan.rikka.domain.model.Todo

fun TodoEntity.toDomainModel() = Todo(
  id = id,
  title = title,
  description = description,
  dateTime = dateTime,
  isComplete = isComplete
)

fun Todo.toDataModel() = TodoEntity(
  id = id,
  title = title,
  description = description,
  dateTime = dateTime,
  isComplete = isComplete
)