# Test Report - L3 

## Test Enviroment
- Browser: Firefox
- Platform: Desktop
- Test Date: 2025-10-18

## Test Results

| Requirement | What was tested | How it was tested | Test Result |
|-------------|-----------------|-------------------|-------------|
| FR-1.1 User input - Personal info | User can input gender, age, activity level | Filled in Step 1: gender="Male", age="32", activity="High", clicked "Next" | ✅ PASS |
| FR-1.1 User input - Race goal | User can input race goal distance and target time | Filled in Step 2: distance="10K", time="50 min" | ✅ PASS |
| FR-1.1 User input - Training frequency | User can select training frequency | Selected "3 days per week" in Step 2 | ✅ PASS |
| FR-1.1 User input - Recent race result | User can input recent race distance and time | Entered recent race: distance="5 km", time="25 min" in Step 2 | ✅ PASS |
| FR-1.2 Analysis - Uses module | System uses running-toolkit module | Verified RunningToolkitAdapter is imported and used in Step3Result.jsx | ✅ PASS |
| FR-1.2 Analysis - Required pace | System calculates required pace for race goal | Verified "Required Average Pace: 4:30 min/km (13.3 km/h)" displayed in Step 3 | ✅ PASS |
| FR-1.2 Analysis - Fitness analysis | System provides full fitness analysis | Verified Profile Summary shows: Resting HR, Max HR, VO2 Max, and 5 pulse zones in Step 3 | ✅ PASS |
| FR-1.2 Analysis - Goal realism | System evaluates goal realism | Entered achievable goal, received "✅ Realistic" assessment in Goal Analysis | ✅ PASS |
| FR-1.3 Results - Required pace display | System displays required pace to reach goal | Verified pace and speed shown in "Goal Analysis" section | ✅ PASS |
| FR-1.3 Results - Fitness profile | System displays user's fitness profile | Verified Profile Summary shows age, gender, heart rates, VO2 Max | ✅ PASS |
| FR-1.3 Results - Training plan | System displays personalized training plan | Verified "Your Weekly Training Plan" shows 3 training days with workout types | ✅ PASS |
| FR-1.4 Navigation - Step progression | User can navigate through steps | Successfully navigated Step 1 → Step 2 → Step 3 by clicking "Next" | ✅ PASS |
| FR-1.4 Navigation - Restart | User can restart process | Clicked "Start Over" in Step 3, returned to Step 1 with empty form | ✅ PASS |
| NFR-2.1 Usability - Responsive | Application is responsive | Tested on desktop and mobile view i browser, worked out fine | ✅ PASS |
| NFR-2.1 Usability - Instructions | Application has clear instructions | Verified help-text present in each step guiding the user | ✅ PASS |

## Summary

- **Total tests** 15
- **Passed** 15
- **Failed** 0


