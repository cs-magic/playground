"use client"

import { useQuery } from "@tanstack/react-query"
import backendAPI from "hand-future-frontend/src/lib/api.ts"

/**
 * sample:
 *   {
 *     "id": 1,
 *     "filename": "Audio Recording 2024-11-17 at 20.47.07.m4a",
 *     "file_size": 67789,
 *     "duration": 1,
 *     "bitrate": 128000,
 *     "created_time": "2024-11-17T15:33:41.126814",
 *     "modified_time": "2024-11-17T15:33:41.126817",
 *     "audio_format": "mp4",
 *     "metadata": null,
 *     "url": "http://cs-magic-standard.oss-cn-wulanchabu.aliyuncs.com/recordings%2F20241117%2FAudio%20Recording%202024-11-17%20at%2020.47.07.m4a?OSSAccessKeyId=LTAI5tCJ54HPNvQWdW9LYjY2&Expires=1731861221&Signature=9bDgsy7jCNSVZTifn%2FNt4T2Jem8%3D"
 *   }
 */
interface Note {
  id: string
  filename: string
  created_time: string
  file_size: string
  audio_format: "NOTE"
  url: string
}

export default function ThoughtsPage() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await backendAPI.get<Note[] | undefined>("/thoughts/list", {
        withCredentials: false,
      })
      return data.data
    },
  })
  console.log({ query })
  const notes = query.data

  if (notes === undefined) {
    return "loading"
  }

  return (
    <div className="flex flex-col h-screen bg-white w-full sm:max-w-sm">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-3 bg-green-400 rounded-sm"></div>
          <div className="h-6 w-3 bg-gray-300 rounded-sm"></div>
        </div>
        <div className="text-lg font-medium">All Files({notes.length})</div>
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 18v-6a9 9 0 0 1 18 0v6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
            />
          </svg>
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto px-4">
        {notes.map(note => (
          <div key={note.id} className="py-4 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-normal">{note.filename}</h3>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>{note.created_time}</span>
                  <span>{note.file_size}</span>
                </div>
                <div className="text-gray-300 text-sm">{note.audio_format}</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center py-4 border-t border-gray-200">
        <button className="flex flex-col items-center space-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <span className="text-sm">Files</span>
        </button>

        <button className="flex items-center justify-center w-14 h-14 bg-red-400 rounded-full text-white text-2xl">
          +
        </button>

        <button className="flex flex-col items-center space-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-sm">Me</span>
        </button>
      </div>
    </div>
  )
}
