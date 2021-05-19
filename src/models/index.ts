export interface State {
  members: Member[];
  tables: number[];
  file: File | null;
}

export interface Member {
  name: string;
  image: ArrayBuffer;
  url: string;
}

export interface ManifestMember {
  name: string;
  file: string;
}

export class Manifest {
  name = "";
  members: ManifestMember[] = [];
  table = "";
  tables: number[] = [];

  constructor(init?: Partial<Manifest>, buffer?: BufferSource) {
    if(buffer) init = JSON.parse(new TextDecoder().decode(buffer))
    Object.assign(this, init);
  }

  public toObject(): any {
    return Object.assign({}, this);
  }
}
