# Health Stories Backend Integration Setup

## Overview
The Health Stories beta signup form has been updated to integrate with a Firebase Cloud Function for secure data storage.

## Frontend Changes Made

### 1. Updated `HealthStoriesBetaForm.tsx`
- **Real API Integration**: Replaced simulated form submission with actual Firebase Cloud Function calls
- **Error Handling**: Added comprehensive error handling with user-friendly error messages
- **Validation**: Client-side validation for required fields
- **Environment Variables**: Uses `VITE_HEALTH_STORIES_API_URL` for API endpoint configuration

### 2. Environment Configuration
- **`.env.example`**: Created template for required environment variables
- **API Endpoint**: Configurable via `VITE_HEALTH_STORIES_API_URL`

## Backend Requirements (To Be Implemented)

### Firebase Cloud Function: `registerBetaSignup`
**Endpoint**: `POST /registerBetaSignup`

**Expected Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required)", 
  "organization": "string (optional)",
  "role": "string (required)",
  "message": "string (optional)",
  "timestamp": "ISO string"
}
```

**Expected Response**:
```json
{
  "status": "success",
  "message": "Signup recorded."
}
```

**Error Responses**:
- `400`: Missing required fields or invalid email format
- `405`: Method not allowed (non-POST requests)
- `500`: Internal server error

### Firestore Collection: `websiteBetaSignups`
**Document Structure**:
```json
{
  "name": "string",
  "email": "string",
  "organization": "string",
  "role": "string", 
  "message": "string",
  "timestamp": "Firestore Timestamp"
}
```

## Setup Instructions

### 1. Backend Setup (Firebase Functions)
1. Navigate to your HealthStories MVP Firebase Functions project
2. Add the provided Cloud Function code to `functions/src/index.ts`
3. Update CORS origins to match your domain(s)
4. Deploy the function: `firebase deploy --only functions:registerBetaSignup`

### 2. Frontend Configuration
1. Copy `.env.example` to `.env`
2. Update `VITE_HEALTH_STORIES_API_URL` with your deployed Cloud Function URL
3. For development: Use Firebase Functions emulator URL
4. For production: Use deployed Cloud Function URL

### 3. CORS Configuration
Update the Cloud Function CORS settings to allow:
- **Production**: `https://www.mosaiclifetech.com`
- **Development**: `http://localhost:5173` (or your dev server port)

## Testing

### Development Testing
1. Start Firebase Functions emulator
2. Set `VITE_HEALTH_STORIES_API_URL` to emulator URL
3. Test form submission with various scenarios:
   - Valid submissions
   - Missing required fields
   - Invalid email formats
   - Network errors

### Production Testing
1. Deploy Cloud Function
2. Update environment variable to production URL
3. Test end-to-end form submission
4. Verify data appears in Firestore `websiteBetaSignups` collection

## Security Features

### Frontend
- Client-side validation for required fields
- Email format validation
- Error handling for network issues
- No sensitive data stored in frontend

### Backend (To Be Implemented)
- Server-side validation
- CORS protection
- Email format validation
- Firestore security rules
- Request rate limiting (recommended)

## Error Handling

The form now displays user-friendly error messages for:
- Missing required fields
- Invalid email format
- Network connectivity issues
- Server errors
- API configuration issues

## Next Steps

1. **Implement the Firebase Cloud Function** using the provided code template
2. **Configure environment variables** with the correct API endpoint
3. **Test the integration** thoroughly in both development and production
4. **Set up monitoring** for the Cloud Function to track usage and errors
5. **Implement Firestore security rules** to protect the beta signup data

## Notes

- The form maintains the same UI/UX while now actually storing data
- All existing functionality (smooth scrolling, success states) is preserved
- The integration is secure and follows Firebase best practices
- Error messages are user-friendly and don't expose technical details
