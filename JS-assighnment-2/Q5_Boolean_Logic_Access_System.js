// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // All required conditions must be true
    const isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    // Demonstrate ! (NOT) and || (OR) as well
    const isUnsafe = !isSecure || (!isDoorLocked || !isWindowClosed);

    console.log({
        isDoorLocked,
        isWindowClosed,
        isAlarmOn,
        isOwnerInside,
        status: isSecure && !isUnsafe ? "Secure" : "Unsafe"
    });
}

checkSecurity(true, true, true, true);
checkSecurity(true, false, true, true);
checkSecurity(true, true, false, true);
checkSecurity(false, true, true, false);
