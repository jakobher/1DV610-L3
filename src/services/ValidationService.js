class ValidationService {
    validateProfileFields(profileData) {
        const { gender, age, activityLevel } = profileData
        const errors = {}
        if (!gender) {
            errors.gender = 'Please, select your gender'
        }

        if (!age || age < 18 || age > 100) {
            errors.age = 'Please, enter a valid age between 18 and 100'
        }

        if (!activityLevel) {
            errors.activityLevel = 'Please, select your activity level'
        }
        return errors
    }

    validateGoalFields(goalData) {
        const { targetDistance, targetTime, knownDistance, knownTime, runningDaysPerWeek } = goalData
        const errors = {}
        if (!targetDistance) {
            errors.targetDistance = 'Please, select your goal distance'
        }
        if (Number(targetDistance) > 100) {
            errors.targetDistance = 'Target distance seems unrealistic, please select a distance less than 100 km'
        }
        if (!targetTime || Number(targetTime) <= 0) {
            errors.targetTime = 'Target time must be greater than 0'
        }
        if (Number(targetTime) > 600) {
            errors.targetTime = 'Target time seems unrealistic, please enter a time less than 600 minutes'
        }
        if (!knownDistance || Number(knownDistance) <= 0) {
            errors.knownDistance = 'Known distance must be greater than 0'
        }
        if (!knownTime || Number(knownTime) <= 0) {
            errors.knownTime = 'Known time must be greater than 0'
        }
        if (!runningDaysPerWeek || Number(runningDaysPerWeek) <= 0) {
            errors.runningDaysPerWeek = 'Please, select how many days you can train per week'
        }
        if (Number(knownDistance) === Number(targetDistance)) {
            errors.knownDistance = 'Known distance must be different from target distance'
        }
        return errors
    }
}

export default ValidationService
