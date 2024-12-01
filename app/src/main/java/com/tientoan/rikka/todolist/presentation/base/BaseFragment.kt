package com.tientoan.rikka.todolist.presentation.base

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.annotation.CallSuper
import androidx.fragment.app.Fragment
import androidx.viewbinding.ViewBinding

abstract class BaseFragment<VB : ViewBinding>(
  private val inflaterBinding: (LayoutInflater, ViewGroup?, Boolean) -> VB
) : Fragment() {
  private var _binding: VB? = null
  val binding: VB
    get() = _binding!!

  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View? {
    _binding = inflaterBinding(inflater, container, false)
    return _binding?.root
  }

  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)
    bindView()
    initAction()
  }

  abstract fun bindView()
  abstract fun initAction()

  override fun onDestroyView() {
    _binding = null
    super.onDestroyView()
  }

}