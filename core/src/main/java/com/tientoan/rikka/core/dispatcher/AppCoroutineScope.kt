/*
 * Created by ChungHA on 8/1/24, 11:57 AM
 * Copyright iKameGlobal (c) 2024 . All rights reserved.
 *
 */
/**
 * This file was originally created by hoangchungk53qx1 (https://github.com/hoangchungk53qx1)
 */

package com.tientoan.rikka.core.dispatcher


import kotlin.coroutines.CoroutineContext
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.SupervisorJob

/**
 * A [CoroutineScope] that is tied to the lifecycle of a [android.app.Application].
 * Use this scope instead of [kotlinx.coroutines.GlobalScope].
 *
 * See [Avoid GlobalScope](https://developer.android.com/kotlin/coroutines/coroutines-best-practices#global-scope)
 * for more information.
 */
interface AppCoroutineScope : CoroutineScope

internal class DefaultAppCoroutineScope
@javax.inject.Inject
constructor(appCoroutineDispatchers: AppCoroutineDispatchers) :
  AppCoroutineScope {
  override val coroutineContext: CoroutineContext =
    appCoroutineDispatchers.io + SupervisorJob()

  override fun toString(): String = "DefaultAppCoroutineScope(coroutineContext=$coroutineContext)"
}
