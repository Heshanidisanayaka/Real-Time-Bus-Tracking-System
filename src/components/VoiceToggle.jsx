import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const VoiceToggle = ({ enabled, setEnabled }) => {
  const { t } = useContext(LanguageContext);
  return (
    <label className="voice-toggle" style={{ marginLeft: '1rem', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
        style={{ marginRight: '0.5rem' }}
      />
      {t('voice.toggle')}
    </label>
  );
};

export default VoiceToggle;
