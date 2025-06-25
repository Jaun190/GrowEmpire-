
-- Tabelle für Pflanzenkäufe
CREATE TABLE IF NOT EXISTS pflanzen (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  sorte TEXT NOT NULL,
  menge INTEGER NOT NULL,
  kaufdatum TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  erntedatum TIMESTAMP WITH TIME ZONE,
  reinvest BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'aktiv'
);
