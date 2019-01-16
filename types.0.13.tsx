/* tslint:disable */

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  jobById?: Job | null;

  localName: string;
}

export interface Job {
  id: number;

  name: string;
}

export interface Mutation {
  createJob?: Job | null;

  setLocalName: string;
}

// ====================================================
// Arguments
// ====================================================

export interface JobByIdQueryArgs {
  id: number;
}
export interface CreateJobMutationArgs {
  name: string;
}
export interface SetLocalNameMutationArgs {
  name: string;
}

// ====================================================
// END: Typescript template
// ====================================================
