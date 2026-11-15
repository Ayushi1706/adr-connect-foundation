export type ValidationResult={valid:true}|{valid:false;message:string};
export function validEmail(v:string):ValidationResult{return v.trim()&&v.length<=254&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())?{valid:true}:{valid:false,message:'Enter a valid email address.'}}
export function validPassword(v:string):ValidationResult{return v.length>=12&&v.length<=128?{valid:true}:{valid:false,message:'Use a password between 12 and 128 characters.'}}
export function passwordsMatch(a:string,b:string):ValidationResult{return a===b?{valid:true}:{valid:false,message:'The passwords do not match.'}}
