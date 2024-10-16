'use client';
    
import React, { useState, useEffect } from 'react';

interface TagListProps {
  tags: string[];
  onTagsChange: (selectedTags: string[]) => void;
}

const TagList: React.FC<TagListProps> = ({ tags, onTagsChange }) => {
  const [sortedTags, setSortedTags] = useState<string[]>([]);
  const [filterText, setFilterText] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const sorted = [...tags].sort((a, b) => a.localeCompare(b));
    setSortedTags(sorted);
  }, [tags]);

  const filteredTags = sortedTags.filter(tag =>
    tag.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleTagToggle = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    onTagsChange(updatedTags);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Tags</h2>
      <input
        type="text"
        placeholder="Filter tags..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul className="space-y-2">
        {filteredTags.map((tag) => (
          <li key={tag} className="flex items-center">
            <input
              type="checkbox"
              id={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagToggle(tag)}
              className="mr-2"
            />
            <label htmlFor={tag} className="text-gray-700 cursor-pointer">
              {tag}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
