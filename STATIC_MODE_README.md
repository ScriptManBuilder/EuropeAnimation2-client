# Static Mode Configuration

## Overview
This application has been configured to run in **static mode** without requiring a backend server. All authentication and user management is handled client-side using localStorage.

## Test User Credentials

The application includes a pre-configured test user account with access to all animation courses:

```
Email: test@test.com
Password: 12345
```

### Environment Variables (.env)
```env
REACT_APP_TEST_USER_EMAIL=test@test.com
REACT_APP_TEST_USER_PASSWORD=12345
REACT_APP_TEST_USER_FIRSTNAME=Test
REACT_APP_TEST_USER_LASTNAME=User
```

## Features

### 1. **Static Authentication**
- Login and registration work without backend
- User data is stored in browser's localStorage
- Session persists across page refreshes

### 2. **Course Access Control**
- **Test User (test@test.com)**: Has access to ALL animation courses
- **Other Users**: Can register and login, but will NOT see courses
- Courses are only displayed for the test account

### 3. **Modified Components**

#### AuthContext (`src/contexts/AuthContext.tsx`)
- Removed backend API calls
- Implemented static authentication
- Credentials validation against .env variables
- localStorage-based session management

#### Account Page (`src/pages/Account.tsx`)
- Course visibility logic: `const isTestAccount = user?.email === 'test@test.com'`
- Test user sees all courses with videos
- Other users see "no courses" message

## How It Works

### Login Flow
1. User enters credentials
2. System checks if email/password match test user from .env
3. If match → User logged in, data saved to localStorage
4. If no match → Error message displayed

### Registration Flow
1. User creates new account
2. Account is created and saved to localStorage
3. User is logged in automatically
4. **Note**: New accounts will NOT have access to courses

### Course Access
```typescript
// In Account.tsx
const isTestAccount = user?.email === 'test@test.com';

if (!isTestAccount) {
  // Show "no courses" message
  return <EmptyCoursesMessage />;
}

// Show all courses for test account
return <CoursesWithVideos />;
```

## Security Notes

⚠️ **Important**: This is a static demo mode intended for development/demo purposes only.

- Credentials are stored in plain text in .env
- No real security or encryption
- Not suitable for production use
- All data is client-side only

## Testing

### Test Account Login:
1. Navigate to `/login`
2. Enter: `test@test.com` / `12345`
3. Access account page to see all courses

### Regular User Registration:
1. Navigate to `/register`
2. Create account with any email/password
3. Login with new credentials
4. Access account page - will see "no courses" message

## Benefits of Static Mode

✅ No backend server required  
✅ Works completely offline  
✅ Fast development and testing  
✅ Easy deployment (static hosting)  
✅ No database needed  
✅ Zero backend costs  

## Limitations

❌ No real user management  
❌ Data lost on localStorage clear  
❌ Single test user with course access  
❌ No password recovery  
❌ No email verification  
❌ Not scalable for production  

## Converting Back to Backend Mode

To restore backend functionality:

1. Restore original `AuthContext.tsx` from git history
2. Uncomment API calls in authentication functions
3. Update .env with backend URL
4. Remove static authentication logic

## File Changes Summary

### Modified Files:
1. **src/contexts/AuthContext.tsx** - Static authentication
2. **src/pages/Account.tsx** - Course access control
3. **.env** - Test user credentials

### No Changes Needed:
- Login page works automatically
- Register page works automatically
- All other pages function normally
