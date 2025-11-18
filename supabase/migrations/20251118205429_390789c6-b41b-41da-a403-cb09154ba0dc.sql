-- Create table for storing lead magnet email captures
CREATE TABLE public.lead_magnet_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  guide_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.lead_magnet_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert their email (lead capture is public)
CREATE POLICY "Anyone can subscribe to lead magnet"
ON public.lead_magnet_subscribers
FOR INSERT
WITH CHECK (true);

-- Create policy to prevent reads (only backend can read)
CREATE POLICY "Only service role can read subscribers"
ON public.lead_magnet_subscribers
FOR SELECT
USING (false);

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.update_lead_magnet_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_lead_magnet_subscribers_updated_at
BEFORE UPDATE ON public.lead_magnet_subscribers
FOR EACH ROW
EXECUTE FUNCTION public.update_lead_magnet_updated_at();

-- Create index for faster email lookups
CREATE INDEX idx_lead_magnet_email ON public.lead_magnet_subscribers(email);