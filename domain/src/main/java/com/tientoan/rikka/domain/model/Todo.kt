package com.tientoan.rikka.domain.model

data class Todo(
  val id: Int,
  val title: String,
  val description: String,
  val dateTime: Long,
  val isComplete: Boolean
)