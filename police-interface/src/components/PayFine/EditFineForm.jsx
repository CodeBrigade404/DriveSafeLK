import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function EditFineForm({ fine, onSave, onCancel }) {
  const [editedFine, setEditedFine] = useState(fine);

  const handleSave = () => {
    onSave(editedFine);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <TextField
        label='Fine Amount'
        value={editedFine.fineAmount}
        onChange={(e) =>
          setEditedFine((prevFine) => ({
            ...prevFine,
            fineAmount: e.target.value,
          }))
        }
        fullWidth
      />
      <TextField
        label='Fine Content'
        value={editedFine.fineContent}
        onChange={(e) =>
          setEditedFine((prevFine) => ({
            ...prevFine,
            fineContent: e.target.value,
          }))
        }
        fullWidth
      />
      {/* Add other input fields for the remaining fine properties */}
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  );
}
