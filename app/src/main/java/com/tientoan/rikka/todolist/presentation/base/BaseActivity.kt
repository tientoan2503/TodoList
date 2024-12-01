package com.tientoan.rikka.todolist.presentation.base

import android.os.Bundle
import android.view.LayoutInflater
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.viewbinding.ViewBinding

abstract class BaseActivity<VB : ViewBinding>(
  private val inflaterBinding: (LayoutInflater) -> VB
) : AppCompatActivity() {
  protected lateinit var binding: VB

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    binding = inflaterBinding(layoutInflater)
    setContentView(binding.root)
    bindView()
    initAction()
  }

  abstract fun bindView()
  abstract fun initAction()
}