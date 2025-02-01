import React, { useState, useCallback } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";

const AddWebsiteStep = ({ value, onChange, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Basic URL validation
  const isValidDomain = (domain) => {
    const pattern = /^([a-zA-Z0-9][a-zA-Z0-9-_]*\.)*[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9-_]*\.[a-zA-Z]{2,}$/;
    return pattern.test(domain);
  };

  const handleSubmit = useCallback(async () => {
    try {
      setError('');
      
      // Validate empty input
      if (!value.trim()) {
        setError('Please enter a domain name');
        return;
      }

      const cleanDomain = value.trim().toLowerCase();
      
      // Remove http(s):// and www. if present
      const formattedDomain = cleanDomain
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '');

      // Validate domain format
      if (!isValidDomain(formattedDomain)) {
        setError('Please enter a valid domain (e.g., example.com)');
        return;
      }

      setIsSubmitting(true);
      await onSubmit(formattedDomain);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add website. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [value, onSubmit]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Label htmlFor="domain">Website Domain</Label>
        <Input
          id="domain"
          placeholder="example.com"
          value={value}
          onChange={(e) => {
            setError('');
            onChange(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          disabled={isSubmitting}
          className={error ? 'border-red-500' : ''}
        />
        {error && (
          <Alert variant="destructive" className="mt-2">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-500">
          Enter your website's domain name without 'http://' or 'www.'
        </p>
        <ul className="text-sm text-gray-500 list-disc pl-4">
          <li>Valid: example.com</li>
          <li>Valid: subdomain.example.com</li>
          <li>Not valid: https://example.com</li>
          <li>Not valid: www.example.com</li>
        </ul>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitting || !value.trim()}
          className="min-w-[100px]"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Adding...</span>
            </div>
          ) : (
            'Add Website'
          )}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(AddWebsiteStep);