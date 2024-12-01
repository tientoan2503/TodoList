package com.tientoan.rikka.todolist.presentation.base

import android.os.Bundle
import android.view.LayoutInflater
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.viewbinding.ViewBinding
import com.tientoan.rikka.todolist.R

abstract class BaseActivity<VB : ViewBinding>(
  private val inflaterBinding: (LayoutInflater) -> VB
) : AppCompatActivity() {
  protected lateinit var binding: VB

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    binding = inflaterBinding(layoutInflater)
    ViewCompat.setOnApplyWindowInsetsListener(binding.root) { v, insets ->
      val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
      v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
      insets
    }
    setContentView(binding.root)
    bindView(savedInstanceState)
    initAction(savedInstanceState)
  }

  abstract fun bindView(savedInstanceState: Bundle?)
  abstract fun initAction(savedInstanceState: Bundle?)
}