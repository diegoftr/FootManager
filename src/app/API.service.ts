/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateJogadoresPelada: OnCreateJogadoresPeladaSubscription;
  onUpdateJogadoresPelada: OnUpdateJogadoresPeladaSubscription;
  onDeleteJogadoresPelada: OnDeleteJogadoresPeladaSubscription;
  onCreatePelada: OnCreatePeladaSubscription;
  onUpdatePelada: OnUpdatePeladaSubscription;
  onDeletePelada: OnDeletePeladaSubscription;
  onCreateJogadores: OnCreateJogadoresSubscription;
  onUpdateJogadores: OnUpdateJogadoresSubscription;
  onDeleteJogadores: OnDeleteJogadoresSubscription;
  onCreateGrupo: OnCreateGrupoSubscription;
  onUpdateGrupo: OnUpdateGrupoSubscription;
  onDeleteGrupo: OnDeleteGrupoSubscription;
};

export type CreateJogadoresPeladaInput = {
  id?: string | null;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type ModelJogadoresPeladaConditionInput = {
  and?: Array<ModelJogadoresPeladaConditionInput | null> | null;
  or?: Array<ModelJogadoresPeladaConditionInput | null> | null;
  not?: ModelJogadoresPeladaConditionInput | null;
  jogadoresPeladaPeladaId?: ModelIDInput | null;
  jogadoresPeladaJogadoresId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type JogadoresPelada = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: Pelada | null;
  Jogadores?: Jogadores | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type Pelada = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: Grupo;
  JogadoresPelada?: JogadoresPelada | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type Grupo = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Jogadores = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: Grupo;
  JogadoresPelada?: JogadoresPelada | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type UpdateJogadoresPeladaInput = {
  id: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type DeleteJogadoresPeladaInput = {
  id: string;
};

export type CreatePeladaInput = {
  id?: string | null;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type ModelPeladaConditionInput = {
  data?: ModelStringInput | null;
  qntJogadores?: ModelIntInput | null;
  duracaoPartida?: ModelIntInput | null;
  and?: Array<ModelPeladaConditionInput | null> | null;
  or?: Array<ModelPeladaConditionInput | null> | null;
  not?: ModelPeladaConditionInput | null;
  peladaGrupoId?: ModelIDInput | null;
  peladaJogadoresPeladaId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePeladaInput = {
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  peladaGrupoId?: string | null;
  peladaJogadoresPeladaId?: string | null;
};

export type DeletePeladaInput = {
  id: string;
};

export type CreateJogadoresInput = {
  id?: string | null;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type ModelJogadoresConditionInput = {
  nome?: ModelStringInput | null;
  email?: ModelStringInput | null;
  telefone?: ModelStringInput | null;
  foto?: ModelIDInput | null;
  time?: ModelStringInput | null;
  aniversario?: ModelStringInput | null;
  escudo?: ModelStringInput | null;
  posicao?: ModelStringInput | null;
  and?: Array<ModelJogadoresConditionInput | null> | null;
  or?: Array<ModelJogadoresConditionInput | null> | null;
  not?: ModelJogadoresConditionInput | null;
  jogadoresGrupoId?: ModelIDInput | null;
  jogadoresJogadoresPeladaId?: ModelIDInput | null;
};

export type UpdateJogadoresInput = {
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  jogadoresGrupoId?: string | null;
  jogadoresJogadoresPeladaId?: string | null;
};

export type DeleteJogadoresInput = {
  id: string;
};

export type CreateGrupoInput = {
  id?: string | null;
  nome?: string | null;
  icon?: string | null;
};

export type ModelGrupoConditionInput = {
  nome?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  and?: Array<ModelGrupoConditionInput | null> | null;
  or?: Array<ModelGrupoConditionInput | null> | null;
  not?: ModelGrupoConditionInput | null;
};

export type UpdateGrupoInput = {
  id: string;
  nome?: string | null;
  icon?: string | null;
};

export type DeleteGrupoInput = {
  id: string;
};

export type ModelJogadoresPeladaFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelJogadoresPeladaFilterInput | null> | null;
  or?: Array<ModelJogadoresPeladaFilterInput | null> | null;
  not?: ModelJogadoresPeladaFilterInput | null;
  jogadoresPeladaPeladaId?: ModelIDInput | null;
  jogadoresPeladaJogadoresId?: ModelIDInput | null;
};

export type ModelJogadoresPeladaConnection = {
  __typename: "ModelJogadoresPeladaConnection";
  items: Array<JogadoresPelada | null>;
  nextToken?: string | null;
};

export type ModelPeladaFilterInput = {
  id?: ModelIDInput | null;
  data?: ModelStringInput | null;
  qntJogadores?: ModelIntInput | null;
  duracaoPartida?: ModelIntInput | null;
  and?: Array<ModelPeladaFilterInput | null> | null;
  or?: Array<ModelPeladaFilterInput | null> | null;
  not?: ModelPeladaFilterInput | null;
  peladaGrupoId?: ModelIDInput | null;
  peladaJogadoresPeladaId?: ModelIDInput | null;
};

export type ModelPeladaConnection = {
  __typename: "ModelPeladaConnection";
  items: Array<Pelada | null>;
  nextToken?: string | null;
};

export type ModelJogadoresFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  email?: ModelStringInput | null;
  telefone?: ModelStringInput | null;
  foto?: ModelIDInput | null;
  time?: ModelStringInput | null;
  aniversario?: ModelStringInput | null;
  escudo?: ModelStringInput | null;
  posicao?: ModelStringInput | null;
  and?: Array<ModelJogadoresFilterInput | null> | null;
  or?: Array<ModelJogadoresFilterInput | null> | null;
  not?: ModelJogadoresFilterInput | null;
  jogadoresGrupoId?: ModelIDInput | null;
  jogadoresJogadoresPeladaId?: ModelIDInput | null;
};

export type ModelJogadoresConnection = {
  __typename: "ModelJogadoresConnection";
  items: Array<Jogadores | null>;
  nextToken?: string | null;
};

export type ModelGrupoFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  and?: Array<ModelGrupoFilterInput | null> | null;
  or?: Array<ModelGrupoFilterInput | null> | null;
  not?: ModelGrupoFilterInput | null;
};

export type ModelGrupoConnection = {
  __typename: "ModelGrupoConnection";
  items: Array<Grupo | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionJogadoresPeladaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionJogadoresPeladaFilterInput | null> | null;
  or?: Array<ModelSubscriptionJogadoresPeladaFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionPeladaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  data?: ModelSubscriptionStringInput | null;
  qntJogadores?: ModelSubscriptionIntInput | null;
  duracaoPartida?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionPeladaFilterInput | null> | null;
  or?: Array<ModelSubscriptionPeladaFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionJogadoresFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  telefone?: ModelSubscriptionStringInput | null;
  foto?: ModelSubscriptionIDInput | null;
  time?: ModelSubscriptionStringInput | null;
  aniversario?: ModelSubscriptionStringInput | null;
  escudo?: ModelSubscriptionStringInput | null;
  posicao?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionJogadoresFilterInput | null> | null;
  or?: Array<ModelSubscriptionJogadoresFilterInput | null> | null;
};

export type ModelSubscriptionGrupoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  icon?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGrupoFilterInput | null> | null;
  or?: Array<ModelSubscriptionGrupoFilterInput | null> | null;
};

export type CreateJogadoresPeladaMutation = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null;
  Jogadores?: {
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type UpdateJogadoresPeladaMutation = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null;
  Jogadores?: {
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type DeleteJogadoresPeladaMutation = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null;
  Jogadores?: {
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type CreatePeladaMutation = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type UpdatePeladaMutation = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type DeletePeladaMutation = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type CreateJogadoresMutation = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type UpdateJogadoresMutation = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type DeleteJogadoresMutation = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type CreateGrupoMutation = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGrupoMutation = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteGrupoMutation = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetJogadoresPeladaQuery = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null;
  Jogadores?: {
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type ListJogadoresPeladasQuery = {
  __typename: "ModelJogadoresPeladaConnection";
  items: Array<{
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetPeladaQuery = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type ListPeladasQuery = {
  __typename: "ModelPeladaConnection";
  items: Array<{
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetJogadoresQuery = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type ListJogadoresQuery = {
  __typename: "ModelJogadoresConnection";
  items: Array<{
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetGrupoQuery = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListGruposQuery = {
  __typename: "ModelGrupoConnection";
  items: Array<{
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateJogadoresPeladaSubscription = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null;
  Jogadores?: {
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type OnUpdateJogadoresPeladaSubscription = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null;
  Jogadores?: {
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type OnDeleteJogadoresPeladaSubscription = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    data?: string | null;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
    peladaJogadoresPeladaId?: string | null;
  } | null;
  Jogadores?: {
    __typename: "Jogadores";
    id: string;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    foto?: string | null;
    time?: string | null;
    aniversario?: string | null;
    escudo?: string | null;
    posicao?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresGrupoId: string;
    jogadoresJogadoresPeladaId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type OnCreatePeladaSubscription = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type OnUpdatePeladaSubscription = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type OnDeletePeladaSubscription = {
  __typename: "Pelada";
  id: string;
  data?: string | null;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
  peladaJogadoresPeladaId?: string | null;
};

export type OnCreateJogadoresSubscription = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type OnUpdateJogadoresSubscription = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type OnDeleteJogadoresSubscription = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  };
  JogadoresPelada?: {
    __typename: "JogadoresPelada";
    id: string;
    createdAt: string;
    updatedAt: string;
    jogadoresPeladaPeladaId?: string | null;
    jogadoresPeladaJogadoresId?: string | null;
  } | null;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
  jogadoresJogadoresPeladaId?: string | null;
};

export type OnCreateGrupoSubscription = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateGrupoSubscription = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteGrupoSubscription = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateJogadoresPelada(
    input: CreateJogadoresPeladaInput,
    condition?: ModelJogadoresPeladaConditionInput
  ): Promise<CreateJogadoresPeladaMutation> {
    const statement = `mutation CreateJogadoresPelada($input: CreateJogadoresPeladaInput!, $condition: ModelJogadoresPeladaConditionInput) {
        createJogadoresPelada(input: $input, condition: $condition) {
          __typename
          id
          Pelada {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          Jogadores {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          createdAt
          updatedAt
          jogadoresPeladaPeladaId
          jogadoresPeladaJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJogadoresPeladaMutation>response.data.createJogadoresPelada;
  }
  async UpdateJogadoresPelada(
    input: UpdateJogadoresPeladaInput,
    condition?: ModelJogadoresPeladaConditionInput
  ): Promise<UpdateJogadoresPeladaMutation> {
    const statement = `mutation UpdateJogadoresPelada($input: UpdateJogadoresPeladaInput!, $condition: ModelJogadoresPeladaConditionInput) {
        updateJogadoresPelada(input: $input, condition: $condition) {
          __typename
          id
          Pelada {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          Jogadores {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          createdAt
          updatedAt
          jogadoresPeladaPeladaId
          jogadoresPeladaJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJogadoresPeladaMutation>response.data.updateJogadoresPelada;
  }
  async DeleteJogadoresPelada(
    input: DeleteJogadoresPeladaInput,
    condition?: ModelJogadoresPeladaConditionInput
  ): Promise<DeleteJogadoresPeladaMutation> {
    const statement = `mutation DeleteJogadoresPelada($input: DeleteJogadoresPeladaInput!, $condition: ModelJogadoresPeladaConditionInput) {
        deleteJogadoresPelada(input: $input, condition: $condition) {
          __typename
          id
          Pelada {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          Jogadores {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          createdAt
          updatedAt
          jogadoresPeladaPeladaId
          jogadoresPeladaJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJogadoresPeladaMutation>response.data.deleteJogadoresPelada;
  }
  async CreatePelada(
    input: CreatePeladaInput,
    condition?: ModelPeladaConditionInput
  ): Promise<CreatePeladaMutation> {
    const statement = `mutation CreatePelada($input: CreatePeladaInput!, $condition: ModelPeladaConditionInput) {
        createPelada(input: $input, condition: $condition) {
          __typename
          id
          data
          qntJogadores
          duracaoPartida
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          createdAt
          updatedAt
          peladaGrupoId
          peladaJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePeladaMutation>response.data.createPelada;
  }
  async UpdatePelada(
    input: UpdatePeladaInput,
    condition?: ModelPeladaConditionInput
  ): Promise<UpdatePeladaMutation> {
    const statement = `mutation UpdatePelada($input: UpdatePeladaInput!, $condition: ModelPeladaConditionInput) {
        updatePelada(input: $input, condition: $condition) {
          __typename
          id
          data
          qntJogadores
          duracaoPartida
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          createdAt
          updatedAt
          peladaGrupoId
          peladaJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePeladaMutation>response.data.updatePelada;
  }
  async DeletePelada(
    input: DeletePeladaInput,
    condition?: ModelPeladaConditionInput
  ): Promise<DeletePeladaMutation> {
    const statement = `mutation DeletePelada($input: DeletePeladaInput!, $condition: ModelPeladaConditionInput) {
        deletePelada(input: $input, condition: $condition) {
          __typename
          id
          data
          qntJogadores
          duracaoPartida
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          createdAt
          updatedAt
          peladaGrupoId
          peladaJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePeladaMutation>response.data.deletePelada;
  }
  async CreateJogadores(
    input: CreateJogadoresInput,
    condition?: ModelJogadoresConditionInput
  ): Promise<CreateJogadoresMutation> {
    const statement = `mutation CreateJogadores($input: CreateJogadoresInput!, $condition: ModelJogadoresConditionInput) {
        createJogadores(input: $input, condition: $condition) {
          __typename
          id
          nome
          email
          telefone
          foto
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
          jogadoresJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJogadoresMutation>response.data.createJogadores;
  }
  async UpdateJogadores(
    input: UpdateJogadoresInput,
    condition?: ModelJogadoresConditionInput
  ): Promise<UpdateJogadoresMutation> {
    const statement = `mutation UpdateJogadores($input: UpdateJogadoresInput!, $condition: ModelJogadoresConditionInput) {
        updateJogadores(input: $input, condition: $condition) {
          __typename
          id
          nome
          email
          telefone
          foto
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
          jogadoresJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJogadoresMutation>response.data.updateJogadores;
  }
  async DeleteJogadores(
    input: DeleteJogadoresInput,
    condition?: ModelJogadoresConditionInput
  ): Promise<DeleteJogadoresMutation> {
    const statement = `mutation DeleteJogadores($input: DeleteJogadoresInput!, $condition: ModelJogadoresConditionInput) {
        deleteJogadores(input: $input, condition: $condition) {
          __typename
          id
          nome
          email
          telefone
          foto
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
          jogadoresJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJogadoresMutation>response.data.deleteJogadores;
  }
  async CreateGrupo(
    input: CreateGrupoInput,
    condition?: ModelGrupoConditionInput
  ): Promise<CreateGrupoMutation> {
    const statement = `mutation CreateGrupo($input: CreateGrupoInput!, $condition: ModelGrupoConditionInput) {
        createGrupo(input: $input, condition: $condition) {
          __typename
          id
          nome
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGrupoMutation>response.data.createGrupo;
  }
  async UpdateGrupo(
    input: UpdateGrupoInput,
    condition?: ModelGrupoConditionInput
  ): Promise<UpdateGrupoMutation> {
    const statement = `mutation UpdateGrupo($input: UpdateGrupoInput!, $condition: ModelGrupoConditionInput) {
        updateGrupo(input: $input, condition: $condition) {
          __typename
          id
          nome
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGrupoMutation>response.data.updateGrupo;
  }
  async DeleteGrupo(
    input: DeleteGrupoInput,
    condition?: ModelGrupoConditionInput
  ): Promise<DeleteGrupoMutation> {
    const statement = `mutation DeleteGrupo($input: DeleteGrupoInput!, $condition: ModelGrupoConditionInput) {
        deleteGrupo(input: $input, condition: $condition) {
          __typename
          id
          nome
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGrupoMutation>response.data.deleteGrupo;
  }
  async GetJogadoresPelada(id: string): Promise<GetJogadoresPeladaQuery> {
    const statement = `query GetJogadoresPelada($id: ID!) {
        getJogadoresPelada(id: $id) {
          __typename
          id
          Pelada {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          Jogadores {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          createdAt
          updatedAt
          jogadoresPeladaPeladaId
          jogadoresPeladaJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJogadoresPeladaQuery>response.data.getJogadoresPelada;
  }
  async ListJogadoresPeladas(
    filter?: ModelJogadoresPeladaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJogadoresPeladasQuery> {
    const statement = `query ListJogadoresPeladas($filter: ModelJogadoresPeladaFilterInput, $limit: Int, $nextToken: String) {
        listJogadoresPeladas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJogadoresPeladasQuery>response.data.listJogadoresPeladas;
  }
  async GetPelada(id: string): Promise<GetPeladaQuery> {
    const statement = `query GetPelada($id: ID!) {
        getPelada(id: $id) {
          __typename
          id
          data
          qntJogadores
          duracaoPartida
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          createdAt
          updatedAt
          peladaGrupoId
          peladaJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPeladaQuery>response.data.getPelada;
  }
  async ListPeladas(
    filter?: ModelPeladaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPeladasQuery> {
    const statement = `query ListPeladas($filter: ModelPeladaFilterInput, $limit: Int, $nextToken: String) {
        listPeladas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPeladasQuery>response.data.listPeladas;
  }
  async GetJogadores(id: string): Promise<GetJogadoresQuery> {
    const statement = `query GetJogadores($id: ID!) {
        getJogadores(id: $id) {
          __typename
          id
          nome
          email
          telefone
          foto
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
          jogadoresJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJogadoresQuery>response.data.getJogadores;
  }
  async ListJogadores(
    filter?: ModelJogadoresFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJogadoresQuery> {
    const statement = `query ListJogadores($filter: ModelJogadoresFilterInput, $limit: Int, $nextToken: String) {
        listJogadores(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJogadoresQuery>response.data.listJogadores;
  }
  async GetGrupo(id: string): Promise<GetGrupoQuery> {
    const statement = `query GetGrupo($id: ID!) {
        getGrupo(id: $id) {
          __typename
          id
          nome
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGrupoQuery>response.data.getGrupo;
  }
  async ListGrupos(
    filter?: ModelGrupoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGruposQuery> {
    const statement = `query ListGrupos($filter: ModelGrupoFilterInput, $limit: Int, $nextToken: String) {
        listGrupos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGruposQuery>response.data.listGrupos;
  }
  OnCreateJogadoresPeladaListener(
    filter?: ModelSubscriptionJogadoresPeladaFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateJogadoresPelada">
    >
  > {
    const statement = `subscription OnCreateJogadoresPelada($filter: ModelSubscriptionJogadoresPeladaFilterInput) {
        onCreateJogadoresPelada(filter: $filter) {
          __typename
          id
          Pelada {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          Jogadores {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          createdAt
          updatedAt
          jogadoresPeladaPeladaId
          jogadoresPeladaJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateJogadoresPelada">
      >
    >;
  }

  OnUpdateJogadoresPeladaListener(
    filter?: ModelSubscriptionJogadoresPeladaFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateJogadoresPelada">
    >
  > {
    const statement = `subscription OnUpdateJogadoresPelada($filter: ModelSubscriptionJogadoresPeladaFilterInput) {
        onUpdateJogadoresPelada(filter: $filter) {
          __typename
          id
          Pelada {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          Jogadores {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          createdAt
          updatedAt
          jogadoresPeladaPeladaId
          jogadoresPeladaJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateJogadoresPelada">
      >
    >;
  }

  OnDeleteJogadoresPeladaListener(
    filter?: ModelSubscriptionJogadoresPeladaFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteJogadoresPelada">
    >
  > {
    const statement = `subscription OnDeleteJogadoresPelada($filter: ModelSubscriptionJogadoresPeladaFilterInput) {
        onDeleteJogadoresPelada(filter: $filter) {
          __typename
          id
          Pelada {
            __typename
            id
            data
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
            peladaJogadoresPeladaId
          }
          Jogadores {
            __typename
            id
            nome
            email
            telefone
            foto
            time
            aniversario
            escudo
            posicao
            createdAt
            updatedAt
            jogadoresGrupoId
            jogadoresJogadoresPeladaId
          }
          createdAt
          updatedAt
          jogadoresPeladaPeladaId
          jogadoresPeladaJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteJogadoresPelada">
      >
    >;
  }

  OnCreatePeladaListener(
    filter?: ModelSubscriptionPeladaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePelada">>
  > {
    const statement = `subscription OnCreatePelada($filter: ModelSubscriptionPeladaFilterInput) {
        onCreatePelada(filter: $filter) {
          __typename
          id
          data
          qntJogadores
          duracaoPartida
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          createdAt
          updatedAt
          peladaGrupoId
          peladaJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePelada">>
    >;
  }

  OnUpdatePeladaListener(
    filter?: ModelSubscriptionPeladaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePelada">>
  > {
    const statement = `subscription OnUpdatePelada($filter: ModelSubscriptionPeladaFilterInput) {
        onUpdatePelada(filter: $filter) {
          __typename
          id
          data
          qntJogadores
          duracaoPartida
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          createdAt
          updatedAt
          peladaGrupoId
          peladaJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePelada">>
    >;
  }

  OnDeletePeladaListener(
    filter?: ModelSubscriptionPeladaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePelada">>
  > {
    const statement = `subscription OnDeletePelada($filter: ModelSubscriptionPeladaFilterInput) {
        onDeletePelada(filter: $filter) {
          __typename
          id
          data
          qntJogadores
          duracaoPartida
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          createdAt
          updatedAt
          peladaGrupoId
          peladaJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePelada">>
    >;
  }

  OnCreateJogadoresListener(
    filter?: ModelSubscriptionJogadoresFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateJogadores">>
  > {
    const statement = `subscription OnCreateJogadores($filter: ModelSubscriptionJogadoresFilterInput) {
        onCreateJogadores(filter: $filter) {
          __typename
          id
          nome
          email
          telefone
          foto
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
          jogadoresJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateJogadores">>
    >;
  }

  OnUpdateJogadoresListener(
    filter?: ModelSubscriptionJogadoresFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateJogadores">>
  > {
    const statement = `subscription OnUpdateJogadores($filter: ModelSubscriptionJogadoresFilterInput) {
        onUpdateJogadores(filter: $filter) {
          __typename
          id
          nome
          email
          telefone
          foto
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
          jogadoresJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateJogadores">>
    >;
  }

  OnDeleteJogadoresListener(
    filter?: ModelSubscriptionJogadoresFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteJogadores">>
  > {
    const statement = `subscription OnDeleteJogadores($filter: ModelSubscriptionJogadoresFilterInput) {
        onDeleteJogadores(filter: $filter) {
          __typename
          id
          nome
          email
          telefone
          foto
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          JogadoresPelada {
            __typename
            id
            createdAt
            updatedAt
            jogadoresPeladaPeladaId
            jogadoresPeladaJogadoresId
          }
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
          jogadoresJogadoresPeladaId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteJogadores">>
    >;
  }

  OnCreateGrupoListener(
    filter?: ModelSubscriptionGrupoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGrupo">>
  > {
    const statement = `subscription OnCreateGrupo($filter: ModelSubscriptionGrupoFilterInput) {
        onCreateGrupo(filter: $filter) {
          __typename
          id
          nome
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGrupo">>
    >;
  }

  OnUpdateGrupoListener(
    filter?: ModelSubscriptionGrupoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGrupo">>
  > {
    const statement = `subscription OnUpdateGrupo($filter: ModelSubscriptionGrupoFilterInput) {
        onUpdateGrupo(filter: $filter) {
          __typename
          id
          nome
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGrupo">>
    >;
  }

  OnDeleteGrupoListener(
    filter?: ModelSubscriptionGrupoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGrupo">>
  > {
    const statement = `subscription OnDeleteGrupo($filter: ModelSubscriptionGrupoFilterInput) {
        onDeleteGrupo(filter: $filter) {
          __typename
          id
          nome
          icon
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGrupo">>
    >;
  }
}
