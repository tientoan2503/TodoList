package com.tientoan.rikka.data.database.di

import android.content.Context
import androidx.room.Room
import com.tientoan.rikka.data.database.TodoDatabase
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
interface DatabaseModule {
  @Singleton
  @Provides
  fun provideTodoDatabase(
    @ApplicationContext context: Context,
  ) : TodoDatabase {
    return Room.databaseBuilder(
      context,
      TodoDatabase::class.java, "database-name"
    ).build()
  }
}