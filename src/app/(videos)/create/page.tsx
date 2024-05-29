'use client';

import { VideoPreview } from '@/components/VideoPreview';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

function CreateVideosPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];

    if (newFile) {
      setFile(newFile);
    }
  };

  return (
    <main>
      <h1>Create Videos Page</h1>
      <Input type="file" accept=".mp4" onChange={handleChange} />
      {
        file && (
          <VideoPreview file={file} />
        )
      }
    </main>
  );
}

export default CreateVideosPage;
