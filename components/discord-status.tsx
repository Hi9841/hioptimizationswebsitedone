"use client"

import { useEffect, useState } from "react"

export function DiscordStatus() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs text-muted-foreground hidden sm:inline">Online</span>
    </div>
  )
}
