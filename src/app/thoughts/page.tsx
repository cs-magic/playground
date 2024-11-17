'use client'

import { useState } from 'react'

interface Note {
  id: string
  title: string
  timestamp: string
  duration: string
  type: 'NOTE'
}

export default function ThoughtsPage() {
  const [notes] = useState<Note[]>([
    {
      id: '1',
      title: '2024-09-18 13:30:17',
      timestamp: '2024-09-18 13:30:17',
      duration: '29s',
      type: 'NOTE'
    },
    {
      id: '2', 
      title: '2024-09-18 09:40:36',
      timestamp: '2024-09-18 09:40:36',
      duration: '8s',
      type: 'NOTE'
    },
    {
      id: '3',
      title: 'iPhone 16 Pro Testing and Video Creation Plan in New York',
      timestamp: '2024-09-17 14:20:06',
      duration: '1m 15s',
      type: 'NOTE'
    },
    {
      id: '4',
      title: 'Comparison of Apple Watch Ultra and Notepad AI in Wearable Technology',
      timestamp: '2024-09-17 14:15:21',
      duration: '2m 25s', 
      type: 'NOTE'
    }
  ])

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-3 bg-green-400 rounded-sm"></div>
          <div className="h-6 w-3 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="text-lg font-medium">All Files(48)</div>
        <div className="w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto px-4">
        {notes.map((note) => (
          <div key={note.id} className="py-4 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-normal">{note.title}</h3>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>{note.timestamp}</span>
                  <span>{note.duration}</span>
                </div>
                <div className="text-gray-300 text-sm">{note.type}</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center py-4 border-t border-gray-200">
        <button className="flex flex-col items-center space-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span className="text-sm">Files</span>
        </button>
        
        <button className="flex items-center justify-center w-14 h-14 bg-red-400 rounded-full text-white text-2xl">
          +
        </button>
        
        <button className="flex flex-col items-center space-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-sm">Me</span>
        </button>
      </div>
    </div>
  )
}
