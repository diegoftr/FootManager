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
  onCreateGolPartidaCampeonato: OnCreateGolPartidaCampeonatoSubscription;
  onUpdateGolPartidaCampeonato: OnUpdateGolPartidaCampeonatoSubscription;
  onDeleteGolPartidaCampeonato: OnDeleteGolPartidaCampeonatoSubscription;
  onCreatePartidaCampeonato: OnCreatePartidaCampeonatoSubscription;
  onUpdatePartidaCampeonato: OnUpdatePartidaCampeonatoSubscription;
  onDeletePartidaCampeonato: OnDeletePartidaCampeonatoSubscription;
  onCreateEquipeCampeonato: OnCreateEquipeCampeonatoSubscription;
  onUpdateEquipeCampeonato: OnUpdateEquipeCampeonatoSubscription;
  onDeleteEquipeCampeonato: OnDeleteEquipeCampeonatoSubscription;
  onCreateJogadoresCampeonato: OnCreateJogadoresCampeonatoSubscription;
  onUpdateJogadoresCampeonato: OnUpdateJogadoresCampeonatoSubscription;
  onDeleteJogadoresCampeonato: OnDeleteJogadoresCampeonatoSubscription;
  onCreateCampeonato: OnCreateCampeonatoSubscription;
  onUpdateCampeonato: OnUpdateCampeonatoSubscription;
  onDeleteCampeonato: OnDeleteCampeonatoSubscription;
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

export type CreateGolPartidaCampeonatoInput = {
  id?: string | null;
  partidacampeonatoID: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type ModelGolPartidaCampeonatoConditionInput = {
  partidacampeonatoID?: ModelIDInput | null;
  and?: Array<ModelGolPartidaCampeonatoConditionInput | null> | null;
  or?: Array<ModelGolPartidaCampeonatoConditionInput | null> | null;
  not?: ModelGolPartidaCampeonatoConditionInput | null;
  golPartidaCampeonatoJogadoresGolId?: ModelIDInput | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: ModelIDInput | null;
  golPartidaCampeonatoEquipeCampeonatoId?: ModelIDInput | null;
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

export type GolPartidaCampeonato = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: JogadoresCampeonato | null;
  JogadoresAssistencia?: JogadoresCampeonato | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: EquipeCampeonato | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type JogadoresCampeonato = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: Campeonato | null;
  Jogadores?: Jogadores | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type Campeonato = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: Grupo | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: ModelPartidaCampeonatoConnection | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type Grupo = {
  __typename: "Grupo";
  id: string;
  nome?: string | null;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelPartidaCampeonatoConnection = {
  __typename: "ModelPartidaCampeonatoConnection";
  items: Array<PartidaCampeonato | null>;
  nextToken?: string | null;
};

export type PartidaCampeonato = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: EquipeCampeonato | null;
  EquipeB?: EquipeCampeonato | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: ModelGolPartidaCampeonatoConnection | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type EquipeCampeonato = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: Campeonato | null;
  JogadoresCampeonatoes?: ModelJogadoresCampeonatoConnection | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type ModelJogadoresCampeonatoConnection = {
  __typename: "ModelJogadoresCampeonatoConnection";
  items: Array<JogadoresCampeonato | null>;
  nextToken?: string | null;
};

export type ModelGolPartidaCampeonatoConnection = {
  __typename: "ModelGolPartidaCampeonatoConnection";
  items: Array<GolPartidaCampeonato | null>;
  nextToken?: string | null;
};

export type Jogadores = {
  __typename: "Jogadores";
  id: string;
  nome?: string | null;
  email?: string | null;
  telefone?: string | null;
  foto?: string | null;
  Grupo: Grupo;
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
};

export type UpdateGolPartidaCampeonatoInput = {
  id: string;
  partidacampeonatoID?: string | null;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type DeleteGolPartidaCampeonatoInput = {
  id: string;
};

export type CreatePartidaCampeonatoInput = {
  id?: string | null;
  tipoPartida?: string | null;
  campeonatoID: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type ModelPartidaCampeonatoConditionInput = {
  tipoPartida?: ModelStringInput | null;
  campeonatoID?: ModelIDInput | null;
  and?: Array<ModelPartidaCampeonatoConditionInput | null> | null;
  or?: Array<ModelPartidaCampeonatoConditionInput | null> | null;
  not?: ModelPartidaCampeonatoConditionInput | null;
  partidaCampeonatoEquipeAId?: ModelIDInput | null;
  partidaCampeonatoEquipeBId?: ModelIDInput | null;
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

export type UpdatePartidaCampeonatoInput = {
  id: string;
  tipoPartida?: string | null;
  campeonatoID?: string | null;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type DeletePartidaCampeonatoInput = {
  id: string;
};

export type CreateEquipeCampeonatoInput = {
  id?: string | null;
  nome?: string | null;
  pais?: string | null;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type ModelEquipeCampeonatoConditionInput = {
  nome?: ModelStringInput | null;
  pais?: ModelStringInput | null;
  and?: Array<ModelEquipeCampeonatoConditionInput | null> | null;
  or?: Array<ModelEquipeCampeonatoConditionInput | null> | null;
  not?: ModelEquipeCampeonatoConditionInput | null;
  equipeCampeonatoCampeonatoId?: ModelIDInput | null;
};

export type UpdateEquipeCampeonatoInput = {
  id: string;
  nome?: string | null;
  pais?: string | null;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type DeleteEquipeCampeonatoInput = {
  id: string;
};

export type CreateJogadoresCampeonatoInput = {
  id?: string | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type ModelJogadoresCampeonatoConditionInput = {
  classificacao?: ModelStringInput | null;
  equipecampeonatoID?: ModelIDInput | null;
  and?: Array<ModelJogadoresCampeonatoConditionInput | null> | null;
  or?: Array<ModelJogadoresCampeonatoConditionInput | null> | null;
  not?: ModelJogadoresCampeonatoConditionInput | null;
  jogadoresCampeonatoCampeonatoId?: ModelIDInput | null;
  jogadoresCampeonatoJogadoresId?: ModelIDInput | null;
};

export type UpdateJogadoresCampeonatoInput = {
  id: string;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type DeleteJogadoresCampeonatoInput = {
  id: string;
};

export type CreateCampeonatoInput = {
  id?: string | null;
  nome?: string | null;
  icone?: string | null;
  data?: string | null;
  campeonatoGrupoId?: string | null;
};

export type ModelCampeonatoConditionInput = {
  nome?: ModelStringInput | null;
  icone?: ModelStringInput | null;
  data?: ModelStringInput | null;
  and?: Array<ModelCampeonatoConditionInput | null> | null;
  or?: Array<ModelCampeonatoConditionInput | null> | null;
  not?: ModelCampeonatoConditionInput | null;
  campeonatoGrupoId?: ModelIDInput | null;
};

export type UpdateCampeonatoInput = {
  id: string;
  nome?: string | null;
  icone?: string | null;
  data?: string | null;
  campeonatoGrupoId?: string | null;
};

export type DeleteCampeonatoInput = {
  id: string;
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

export type JogadoresPelada = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: Pelada | null;
  Jogadores?: JogadoresCampeonato | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type Pelada = {
  __typename: "Pelada";
  id: string;
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  Grupo: Grupo;
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
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
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  peladaGrupoId: string;
};

export type ModelPeladaConditionInput = {
  qntJogadores?: ModelIntInput | null;
  duracaoPartida?: ModelIntInput | null;
  and?: Array<ModelPeladaConditionInput | null> | null;
  or?: Array<ModelPeladaConditionInput | null> | null;
  not?: ModelPeladaConditionInput | null;
  peladaGrupoId?: ModelIDInput | null;
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
  qntJogadores?: number | null;
  duracaoPartida?: number | null;
  peladaGrupoId?: string | null;
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

export type ModelGolPartidaCampeonatoFilterInput = {
  id?: ModelIDInput | null;
  partidacampeonatoID?: ModelIDInput | null;
  and?: Array<ModelGolPartidaCampeonatoFilterInput | null> | null;
  or?: Array<ModelGolPartidaCampeonatoFilterInput | null> | null;
  not?: ModelGolPartidaCampeonatoFilterInput | null;
  golPartidaCampeonatoJogadoresGolId?: ModelIDInput | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: ModelIDInput | null;
  golPartidaCampeonatoEquipeCampeonatoId?: ModelIDInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelPartidaCampeonatoFilterInput = {
  id?: ModelIDInput | null;
  tipoPartida?: ModelStringInput | null;
  campeonatoID?: ModelIDInput | null;
  and?: Array<ModelPartidaCampeonatoFilterInput | null> | null;
  or?: Array<ModelPartidaCampeonatoFilterInput | null> | null;
  not?: ModelPartidaCampeonatoFilterInput | null;
  partidaCampeonatoEquipeAId?: ModelIDInput | null;
  partidaCampeonatoEquipeBId?: ModelIDInput | null;
};

export type ModelEquipeCampeonatoFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  pais?: ModelStringInput | null;
  and?: Array<ModelEquipeCampeonatoFilterInput | null> | null;
  or?: Array<ModelEquipeCampeonatoFilterInput | null> | null;
  not?: ModelEquipeCampeonatoFilterInput | null;
  equipeCampeonatoCampeonatoId?: ModelIDInput | null;
};

export type ModelEquipeCampeonatoConnection = {
  __typename: "ModelEquipeCampeonatoConnection";
  items: Array<EquipeCampeonato | null>;
  nextToken?: string | null;
};

export type ModelJogadoresCampeonatoFilterInput = {
  id?: ModelIDInput | null;
  classificacao?: ModelStringInput | null;
  equipecampeonatoID?: ModelIDInput | null;
  and?: Array<ModelJogadoresCampeonatoFilterInput | null> | null;
  or?: Array<ModelJogadoresCampeonatoFilterInput | null> | null;
  not?: ModelJogadoresCampeonatoFilterInput | null;
  jogadoresCampeonatoCampeonatoId?: ModelIDInput | null;
  jogadoresCampeonatoJogadoresId?: ModelIDInput | null;
};

export type ModelCampeonatoFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  icone?: ModelStringInput | null;
  data?: ModelStringInput | null;
  and?: Array<ModelCampeonatoFilterInput | null> | null;
  or?: Array<ModelCampeonatoFilterInput | null> | null;
  not?: ModelCampeonatoFilterInput | null;
  campeonatoGrupoId?: ModelIDInput | null;
};

export type ModelCampeonatoConnection = {
  __typename: "ModelCampeonatoConnection";
  items: Array<Campeonato | null>;
  nextToken?: string | null;
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
  qntJogadores?: ModelIntInput | null;
  duracaoPartida?: ModelIntInput | null;
  and?: Array<ModelPeladaFilterInput | null> | null;
  or?: Array<ModelPeladaFilterInput | null> | null;
  not?: ModelPeladaFilterInput | null;
  peladaGrupoId?: ModelIDInput | null;
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

export type ModelSubscriptionGolPartidaCampeonatoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  partidacampeonatoID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionGolPartidaCampeonatoFilterInput | null> | null;
  or?: Array<ModelSubscriptionGolPartidaCampeonatoFilterInput | null> | null;
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

export type ModelSubscriptionPartidaCampeonatoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  tipoPartida?: ModelSubscriptionStringInput | null;
  campeonatoID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionPartidaCampeonatoFilterInput | null> | null;
  or?: Array<ModelSubscriptionPartidaCampeonatoFilterInput | null> | null;
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

export type ModelSubscriptionEquipeCampeonatoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  pais?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEquipeCampeonatoFilterInput | null> | null;
  or?: Array<ModelSubscriptionEquipeCampeonatoFilterInput | null> | null;
};

export type ModelSubscriptionJogadoresCampeonatoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  classificacao?: ModelSubscriptionStringInput | null;
  equipecampeonatoID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionJogadoresCampeonatoFilterInput | null> | null;
  or?: Array<ModelSubscriptionJogadoresCampeonatoFilterInput | null> | null;
};

export type ModelSubscriptionCampeonatoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  icone?: ModelSubscriptionStringInput | null;
  data?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCampeonatoFilterInput | null> | null;
  or?: Array<ModelSubscriptionCampeonatoFilterInput | null> | null;
};

export type ModelSubscriptionJogadoresPeladaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionJogadoresPeladaFilterInput | null> | null;
  or?: Array<ModelSubscriptionJogadoresPeladaFilterInput | null> | null;
};

export type ModelSubscriptionPeladaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  qntJogadores?: ModelSubscriptionIntInput | null;
  duracaoPartida?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionPeladaFilterInput | null> | null;
  or?: Array<ModelSubscriptionPeladaFilterInput | null> | null;
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

export type CreateGolPartidaCampeonatoMutation = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  JogadoresAssistencia?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type UpdateGolPartidaCampeonatoMutation = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  JogadoresAssistencia?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type DeleteGolPartidaCampeonatoMutation = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  JogadoresAssistencia?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type CreatePartidaCampeonatoMutation = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  EquipeB?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: {
    __typename: "ModelGolPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type UpdatePartidaCampeonatoMutation = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  EquipeB?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: {
    __typename: "ModelGolPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type DeletePartidaCampeonatoMutation = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  EquipeB?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: {
    __typename: "ModelGolPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type CreateEquipeCampeonatoMutation = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null;
  JogadoresCampeonatoes?: {
    __typename: "ModelJogadoresCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type UpdateEquipeCampeonatoMutation = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null;
  JogadoresCampeonatoes?: {
    __typename: "ModelJogadoresCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type DeleteEquipeCampeonatoMutation = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null;
  JogadoresCampeonatoes?: {
    __typename: "ModelJogadoresCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type CreateJogadoresCampeonatoMutation = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
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
  } | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type UpdateJogadoresCampeonatoMutation = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
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
  } | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type DeleteJogadoresCampeonatoMutation = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
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
  } | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type CreateCampeonatoMutation = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: {
    __typename: "ModelPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type UpdateCampeonatoMutation = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: {
    __typename: "ModelPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type DeleteCampeonatoMutation = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: {
    __typename: "ModelPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type CreateJogadoresPeladaMutation = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
  } | null;
  Jogadores?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
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
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
  } | null;
  Jogadores?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
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
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
  } | null;
  Jogadores?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type CreatePeladaMutation = {
  __typename: "Pelada";
  id: string;
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
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
};

export type UpdatePeladaMutation = {
  __typename: "Pelada";
  id: string;
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
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
};

export type DeletePeladaMutation = {
  __typename: "Pelada";
  id: string;
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
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
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
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
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
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
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
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
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

export type GetGolPartidaCampeonatoQuery = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  JogadoresAssistencia?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type ListGolPartidaCampeonatoesQuery = {
  __typename: "ModelGolPartidaCampeonatoConnection";
  items: Array<{
    __typename: "GolPartidaCampeonato";
    id: string;
    partidacampeonatoID: string;
    createdAt: string;
    updatedAt: string;
    golPartidaCampeonatoJogadoresGolId?: string | null;
    golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
    golPartidaCampeonatoEquipeCampeonatoId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GolPartidaCampeonatoesByPartidacampeonatoIDQuery = {
  __typename: "ModelGolPartidaCampeonatoConnection";
  items: Array<{
    __typename: "GolPartidaCampeonato";
    id: string;
    partidacampeonatoID: string;
    createdAt: string;
    updatedAt: string;
    golPartidaCampeonatoJogadoresGolId?: string | null;
    golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
    golPartidaCampeonatoEquipeCampeonatoId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetPartidaCampeonatoQuery = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  EquipeB?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: {
    __typename: "ModelGolPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type ListPartidaCampeonatoesQuery = {
  __typename: "ModelPartidaCampeonatoConnection";
  items: Array<{
    __typename: "PartidaCampeonato";
    id: string;
    tipoPartida?: string | null;
    campeonatoID: string;
    createdAt: string;
    updatedAt: string;
    partidaCampeonatoEquipeAId?: string | null;
    partidaCampeonatoEquipeBId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type PartidaCampeonatoesByCampeonatoIDQuery = {
  __typename: "ModelPartidaCampeonatoConnection";
  items: Array<{
    __typename: "PartidaCampeonato";
    id: string;
    tipoPartida?: string | null;
    campeonatoID: string;
    createdAt: string;
    updatedAt: string;
    partidaCampeonatoEquipeAId?: string | null;
    partidaCampeonatoEquipeBId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetEquipeCampeonatoQuery = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null;
  JogadoresCampeonatoes?: {
    __typename: "ModelJogadoresCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type ListEquipeCampeonatoesQuery = {
  __typename: "ModelEquipeCampeonatoConnection";
  items: Array<{
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetJogadoresCampeonatoQuery = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
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
  } | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type ListJogadoresCampeonatoesQuery = {
  __typename: "ModelJogadoresCampeonatoConnection";
  items: Array<{
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type JogadoresCampeonatoesByEquipecampeonatoIDQuery = {
  __typename: "ModelJogadoresCampeonatoConnection";
  items: Array<{
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCampeonatoQuery = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: {
    __typename: "ModelPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type ListCampeonatoesQuery = {
  __typename: "ModelCampeonatoConnection";
  items: Array<{
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetJogadoresPeladaQuery = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
  } | null;
  Jogadores?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
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
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
};

export type ListPeladasQuery = {
  __typename: "ModelPeladaConnection";
  items: Array<{
    __typename: "Pelada";
    id: string;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
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
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
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

export type OnCreateGolPartidaCampeonatoSubscription = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  JogadoresAssistencia?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type OnUpdateGolPartidaCampeonatoSubscription = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  JogadoresAssistencia?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type OnDeleteGolPartidaCampeonatoSubscription = {
  __typename: "GolPartidaCampeonato";
  id: string;
  JogadoresGol?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  JogadoresAssistencia?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  partidacampeonatoID: string;
  EquipeCampeonato?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  golPartidaCampeonatoJogadoresGolId?: string | null;
  golPartidaCampeonatoJogadoresAssistenciaId?: string | null;
  golPartidaCampeonatoEquipeCampeonatoId?: string | null;
};

export type OnCreatePartidaCampeonatoSubscription = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  EquipeB?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: {
    __typename: "ModelGolPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type OnUpdatePartidaCampeonatoSubscription = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  EquipeB?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: {
    __typename: "ModelGolPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type OnDeletePartidaCampeonatoSubscription = {
  __typename: "PartidaCampeonato";
  id: string;
  EquipeA?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  EquipeB?: {
    __typename: "EquipeCampeonato";
    id: string;
    nome?: string | null;
    pais?: string | null;
    createdAt: string;
    updatedAt: string;
    equipeCampeonatoCampeonatoId?: string | null;
  } | null;
  tipoPartida?: string | null;
  GolPartidaCampeonatoes?: {
    __typename: "ModelGolPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  campeonatoID: string;
  createdAt: string;
  updatedAt: string;
  partidaCampeonatoEquipeAId?: string | null;
  partidaCampeonatoEquipeBId?: string | null;
};

export type OnCreateEquipeCampeonatoSubscription = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null;
  JogadoresCampeonatoes?: {
    __typename: "ModelJogadoresCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type OnUpdateEquipeCampeonatoSubscription = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null;
  JogadoresCampeonatoes?: {
    __typename: "ModelJogadoresCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type OnDeleteEquipeCampeonatoSubscription = {
  __typename: "EquipeCampeonato";
  id: string;
  nome?: string | null;
  pais?: string | null;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
  } | null;
  JogadoresCampeonatoes?: {
    __typename: "ModelJogadoresCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  equipeCampeonatoCampeonatoId?: string | null;
};

export type OnCreateJogadoresCampeonatoSubscription = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
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
  } | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type OnUpdateJogadoresCampeonatoSubscription = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
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
  } | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type OnDeleteJogadoresCampeonatoSubscription = {
  __typename: "JogadoresCampeonato";
  id: string;
  Campeonato?: {
    __typename: "Campeonato";
    id: string;
    nome?: string | null;
    icone?: string | null;
    data?: string | null;
    createdAt: string;
    updatedAt: string;
    campeonatoGrupoId?: string | null;
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
  } | null;
  classificacao?: string | null;
  equipecampeonatoID?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresCampeonatoCampeonatoId?: string | null;
  jogadoresCampeonatoJogadoresId?: string | null;
};

export type OnCreateCampeonatoSubscription = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: {
    __typename: "ModelPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type OnUpdateCampeonatoSubscription = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: {
    __typename: "ModelPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type OnDeleteCampeonatoSubscription = {
  __typename: "Campeonato";
  id: string;
  nome?: string | null;
  Grupo?: {
    __typename: "Grupo";
    id: string;
    nome?: string | null;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  icone?: string | null;
  data?: string | null;
  PartidaCampeonatoes?: {
    __typename: "ModelPartidaCampeonatoConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  campeonatoGrupoId?: string | null;
};

export type OnCreateJogadoresPeladaSubscription = {
  __typename: "JogadoresPelada";
  id: string;
  Pelada?: {
    __typename: "Pelada";
    id: string;
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
  } | null;
  Jogadores?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
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
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
  } | null;
  Jogadores?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
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
    qntJogadores?: number | null;
    duracaoPartida?: number | null;
    createdAt: string;
    updatedAt: string;
    peladaGrupoId: string;
  } | null;
  Jogadores?: {
    __typename: "JogadoresCampeonato";
    id: string;
    classificacao?: string | null;
    equipecampeonatoID?: string | null;
    createdAt: string;
    updatedAt: string;
    jogadoresCampeonatoCampeonatoId?: string | null;
    jogadoresCampeonatoJogadoresId?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  jogadoresPeladaPeladaId?: string | null;
  jogadoresPeladaJogadoresId?: string | null;
};

export type OnCreatePeladaSubscription = {
  __typename: "Pelada";
  id: string;
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
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
};

export type OnUpdatePeladaSubscription = {
  __typename: "Pelada";
  id: string;
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
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
};

export type OnDeletePeladaSubscription = {
  __typename: "Pelada";
  id: string;
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
  createdAt: string;
  updatedAt: string;
  peladaGrupoId: string;
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
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
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
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
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
  time?: string | null;
  aniversario?: string | null;
  escudo?: string | null;
  posicao?: string | null;
  createdAt: string;
  updatedAt: string;
  jogadoresGrupoId: string;
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
  async CreateGolPartidaCampeonato(
    input: CreateGolPartidaCampeonatoInput,
    condition?: ModelGolPartidaCampeonatoConditionInput
  ): Promise<CreateGolPartidaCampeonatoMutation> {
    const statement = `mutation CreateGolPartidaCampeonato($input: CreateGolPartidaCampeonatoInput!, $condition: ModelGolPartidaCampeonatoConditionInput) {
        createGolPartidaCampeonato(input: $input, condition: $condition) {
          __typename
          id
          JogadoresGol {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          JogadoresAssistencia {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          partidacampeonatoID
          EquipeCampeonato {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          createdAt
          updatedAt
          golPartidaCampeonatoJogadoresGolId
          golPartidaCampeonatoJogadoresAssistenciaId
          golPartidaCampeonatoEquipeCampeonatoId
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
    return <CreateGolPartidaCampeonatoMutation>(
      response.data.createGolPartidaCampeonato
    );
  }
  async UpdateGolPartidaCampeonato(
    input: UpdateGolPartidaCampeonatoInput,
    condition?: ModelGolPartidaCampeonatoConditionInput
  ): Promise<UpdateGolPartidaCampeonatoMutation> {
    const statement = `mutation UpdateGolPartidaCampeonato($input: UpdateGolPartidaCampeonatoInput!, $condition: ModelGolPartidaCampeonatoConditionInput) {
        updateGolPartidaCampeonato(input: $input, condition: $condition) {
          __typename
          id
          JogadoresGol {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          JogadoresAssistencia {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          partidacampeonatoID
          EquipeCampeonato {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          createdAt
          updatedAt
          golPartidaCampeonatoJogadoresGolId
          golPartidaCampeonatoJogadoresAssistenciaId
          golPartidaCampeonatoEquipeCampeonatoId
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
    return <UpdateGolPartidaCampeonatoMutation>(
      response.data.updateGolPartidaCampeonato
    );
  }
  async DeleteGolPartidaCampeonato(
    input: DeleteGolPartidaCampeonatoInput,
    condition?: ModelGolPartidaCampeonatoConditionInput
  ): Promise<DeleteGolPartidaCampeonatoMutation> {
    const statement = `mutation DeleteGolPartidaCampeonato($input: DeleteGolPartidaCampeonatoInput!, $condition: ModelGolPartidaCampeonatoConditionInput) {
        deleteGolPartidaCampeonato(input: $input, condition: $condition) {
          __typename
          id
          JogadoresGol {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          JogadoresAssistencia {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          partidacampeonatoID
          EquipeCampeonato {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          createdAt
          updatedAt
          golPartidaCampeonatoJogadoresGolId
          golPartidaCampeonatoJogadoresAssistenciaId
          golPartidaCampeonatoEquipeCampeonatoId
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
    return <DeleteGolPartidaCampeonatoMutation>(
      response.data.deleteGolPartidaCampeonato
    );
  }
  async CreatePartidaCampeonato(
    input: CreatePartidaCampeonatoInput,
    condition?: ModelPartidaCampeonatoConditionInput
  ): Promise<CreatePartidaCampeonatoMutation> {
    const statement = `mutation CreatePartidaCampeonato($input: CreatePartidaCampeonatoInput!, $condition: ModelPartidaCampeonatoConditionInput) {
        createPartidaCampeonato(input: $input, condition: $condition) {
          __typename
          id
          EquipeA {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          EquipeB {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          tipoPartida
          GolPartidaCampeonatoes {
            __typename
            nextToken
          }
          campeonatoID
          createdAt
          updatedAt
          partidaCampeonatoEquipeAId
          partidaCampeonatoEquipeBId
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
    return <CreatePartidaCampeonatoMutation>(
      response.data.createPartidaCampeonato
    );
  }
  async UpdatePartidaCampeonato(
    input: UpdatePartidaCampeonatoInput,
    condition?: ModelPartidaCampeonatoConditionInput
  ): Promise<UpdatePartidaCampeonatoMutation> {
    const statement = `mutation UpdatePartidaCampeonato($input: UpdatePartidaCampeonatoInput!, $condition: ModelPartidaCampeonatoConditionInput) {
        updatePartidaCampeonato(input: $input, condition: $condition) {
          __typename
          id
          EquipeA {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          EquipeB {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          tipoPartida
          GolPartidaCampeonatoes {
            __typename
            nextToken
          }
          campeonatoID
          createdAt
          updatedAt
          partidaCampeonatoEquipeAId
          partidaCampeonatoEquipeBId
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
    return <UpdatePartidaCampeonatoMutation>(
      response.data.updatePartidaCampeonato
    );
  }
  async DeletePartidaCampeonato(
    input: DeletePartidaCampeonatoInput,
    condition?: ModelPartidaCampeonatoConditionInput
  ): Promise<DeletePartidaCampeonatoMutation> {
    const statement = `mutation DeletePartidaCampeonato($input: DeletePartidaCampeonatoInput!, $condition: ModelPartidaCampeonatoConditionInput) {
        deletePartidaCampeonato(input: $input, condition: $condition) {
          __typename
          id
          EquipeA {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          EquipeB {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          tipoPartida
          GolPartidaCampeonatoes {
            __typename
            nextToken
          }
          campeonatoID
          createdAt
          updatedAt
          partidaCampeonatoEquipeAId
          partidaCampeonatoEquipeBId
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
    return <DeletePartidaCampeonatoMutation>(
      response.data.deletePartidaCampeonato
    );
  }
  async CreateEquipeCampeonato(
    input: CreateEquipeCampeonatoInput,
    condition?: ModelEquipeCampeonatoConditionInput
  ): Promise<CreateEquipeCampeonatoMutation> {
    const statement = `mutation CreateEquipeCampeonato($input: CreateEquipeCampeonatoInput!, $condition: ModelEquipeCampeonatoConditionInput) {
        createEquipeCampeonato(input: $input, condition: $condition) {
          __typename
          id
          nome
          pais
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
          }
          JogadoresCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          equipeCampeonatoCampeonatoId
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
    return <CreateEquipeCampeonatoMutation>response.data.createEquipeCampeonato;
  }
  async UpdateEquipeCampeonato(
    input: UpdateEquipeCampeonatoInput,
    condition?: ModelEquipeCampeonatoConditionInput
  ): Promise<UpdateEquipeCampeonatoMutation> {
    const statement = `mutation UpdateEquipeCampeonato($input: UpdateEquipeCampeonatoInput!, $condition: ModelEquipeCampeonatoConditionInput) {
        updateEquipeCampeonato(input: $input, condition: $condition) {
          __typename
          id
          nome
          pais
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
          }
          JogadoresCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          equipeCampeonatoCampeonatoId
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
    return <UpdateEquipeCampeonatoMutation>response.data.updateEquipeCampeonato;
  }
  async DeleteEquipeCampeonato(
    input: DeleteEquipeCampeonatoInput,
    condition?: ModelEquipeCampeonatoConditionInput
  ): Promise<DeleteEquipeCampeonatoMutation> {
    const statement = `mutation DeleteEquipeCampeonato($input: DeleteEquipeCampeonatoInput!, $condition: ModelEquipeCampeonatoConditionInput) {
        deleteEquipeCampeonato(input: $input, condition: $condition) {
          __typename
          id
          nome
          pais
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
          }
          JogadoresCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          equipeCampeonatoCampeonatoId
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
    return <DeleteEquipeCampeonatoMutation>response.data.deleteEquipeCampeonato;
  }
  async CreateJogadoresCampeonato(
    input: CreateJogadoresCampeonatoInput,
    condition?: ModelJogadoresCampeonatoConditionInput
  ): Promise<CreateJogadoresCampeonatoMutation> {
    const statement = `mutation CreateJogadoresCampeonato($input: CreateJogadoresCampeonatoInput!, $condition: ModelJogadoresCampeonatoConditionInput) {
        createJogadoresCampeonato(input: $input, condition: $condition) {
          __typename
          id
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
          }
          classificacao
          equipecampeonatoID
          createdAt
          updatedAt
          jogadoresCampeonatoCampeonatoId
          jogadoresCampeonatoJogadoresId
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
    return <CreateJogadoresCampeonatoMutation>(
      response.data.createJogadoresCampeonato
    );
  }
  async UpdateJogadoresCampeonato(
    input: UpdateJogadoresCampeonatoInput,
    condition?: ModelJogadoresCampeonatoConditionInput
  ): Promise<UpdateJogadoresCampeonatoMutation> {
    const statement = `mutation UpdateJogadoresCampeonato($input: UpdateJogadoresCampeonatoInput!, $condition: ModelJogadoresCampeonatoConditionInput) {
        updateJogadoresCampeonato(input: $input, condition: $condition) {
          __typename
          id
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
          }
          classificacao
          equipecampeonatoID
          createdAt
          updatedAt
          jogadoresCampeonatoCampeonatoId
          jogadoresCampeonatoJogadoresId
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
    return <UpdateJogadoresCampeonatoMutation>(
      response.data.updateJogadoresCampeonato
    );
  }
  async DeleteJogadoresCampeonato(
    input: DeleteJogadoresCampeonatoInput,
    condition?: ModelJogadoresCampeonatoConditionInput
  ): Promise<DeleteJogadoresCampeonatoMutation> {
    const statement = `mutation DeleteJogadoresCampeonato($input: DeleteJogadoresCampeonatoInput!, $condition: ModelJogadoresCampeonatoConditionInput) {
        deleteJogadoresCampeonato(input: $input, condition: $condition) {
          __typename
          id
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
          }
          classificacao
          equipecampeonatoID
          createdAt
          updatedAt
          jogadoresCampeonatoCampeonatoId
          jogadoresCampeonatoJogadoresId
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
    return <DeleteJogadoresCampeonatoMutation>(
      response.data.deleteJogadoresCampeonato
    );
  }
  async CreateCampeonato(
    input: CreateCampeonatoInput,
    condition?: ModelCampeonatoConditionInput
  ): Promise<CreateCampeonatoMutation> {
    const statement = `mutation CreateCampeonato($input: CreateCampeonatoInput!, $condition: ModelCampeonatoConditionInput) {
        createCampeonato(input: $input, condition: $condition) {
          __typename
          id
          nome
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          icone
          data
          PartidaCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          campeonatoGrupoId
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
    return <CreateCampeonatoMutation>response.data.createCampeonato;
  }
  async UpdateCampeonato(
    input: UpdateCampeonatoInput,
    condition?: ModelCampeonatoConditionInput
  ): Promise<UpdateCampeonatoMutation> {
    const statement = `mutation UpdateCampeonato($input: UpdateCampeonatoInput!, $condition: ModelCampeonatoConditionInput) {
        updateCampeonato(input: $input, condition: $condition) {
          __typename
          id
          nome
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          icone
          data
          PartidaCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          campeonatoGrupoId
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
    return <UpdateCampeonatoMutation>response.data.updateCampeonato;
  }
  async DeleteCampeonato(
    input: DeleteCampeonatoInput,
    condition?: ModelCampeonatoConditionInput
  ): Promise<DeleteCampeonatoMutation> {
    const statement = `mutation DeleteCampeonato($input: DeleteCampeonatoInput!, $condition: ModelCampeonatoConditionInput) {
        deleteCampeonato(input: $input, condition: $condition) {
          __typename
          id
          nome
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          icone
          data
          PartidaCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          campeonatoGrupoId
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
    return <DeleteCampeonatoMutation>response.data.deleteCampeonato;
  }
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
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
          }
          Jogadores {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
          }
          Jogadores {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
          }
          Jogadores {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
          createdAt
          updatedAt
          peladaGrupoId
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
          createdAt
          updatedAt
          peladaGrupoId
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
          createdAt
          updatedAt
          peladaGrupoId
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
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
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
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
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
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
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
  async GetGolPartidaCampeonato(
    id: string
  ): Promise<GetGolPartidaCampeonatoQuery> {
    const statement = `query GetGolPartidaCampeonato($id: ID!) {
        getGolPartidaCampeonato(id: $id) {
          __typename
          id
          JogadoresGol {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          JogadoresAssistencia {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          partidacampeonatoID
          EquipeCampeonato {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          createdAt
          updatedAt
          golPartidaCampeonatoJogadoresGolId
          golPartidaCampeonatoJogadoresAssistenciaId
          golPartidaCampeonatoEquipeCampeonatoId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGolPartidaCampeonatoQuery>response.data.getGolPartidaCampeonato;
  }
  async ListGolPartidaCampeonatoes(
    filter?: ModelGolPartidaCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGolPartidaCampeonatoesQuery> {
    const statement = `query ListGolPartidaCampeonatoes($filter: ModelGolPartidaCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        listGolPartidaCampeonatoes(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            partidacampeonatoID
            createdAt
            updatedAt
            golPartidaCampeonatoJogadoresGolId
            golPartidaCampeonatoJogadoresAssistenciaId
            golPartidaCampeonatoEquipeCampeonatoId
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
    return <ListGolPartidaCampeonatoesQuery>(
      response.data.listGolPartidaCampeonatoes
    );
  }
  async GolPartidaCampeonatoesByPartidacampeonatoID(
    partidacampeonatoID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelGolPartidaCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GolPartidaCampeonatoesByPartidacampeonatoIDQuery> {
    const statement = `query GolPartidaCampeonatoesByPartidacampeonatoID($partidacampeonatoID: ID!, $sortDirection: ModelSortDirection, $filter: ModelGolPartidaCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        golPartidaCampeonatoesByPartidacampeonatoID(
          partidacampeonatoID: $partidacampeonatoID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            partidacampeonatoID
            createdAt
            updatedAt
            golPartidaCampeonatoJogadoresGolId
            golPartidaCampeonatoJogadoresAssistenciaId
            golPartidaCampeonatoEquipeCampeonatoId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      partidacampeonatoID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <GolPartidaCampeonatoesByPartidacampeonatoIDQuery>(
      response.data.golPartidaCampeonatoesByPartidacampeonatoID
    );
  }
  async GetPartidaCampeonato(id: string): Promise<GetPartidaCampeonatoQuery> {
    const statement = `query GetPartidaCampeonato($id: ID!) {
        getPartidaCampeonato(id: $id) {
          __typename
          id
          EquipeA {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          EquipeB {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          tipoPartida
          GolPartidaCampeonatoes {
            __typename
            nextToken
          }
          campeonatoID
          createdAt
          updatedAt
          partidaCampeonatoEquipeAId
          partidaCampeonatoEquipeBId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPartidaCampeonatoQuery>response.data.getPartidaCampeonato;
  }
  async ListPartidaCampeonatoes(
    filter?: ModelPartidaCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPartidaCampeonatoesQuery> {
    const statement = `query ListPartidaCampeonatoes($filter: ModelPartidaCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        listPartidaCampeonatoes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            tipoPartida
            campeonatoID
            createdAt
            updatedAt
            partidaCampeonatoEquipeAId
            partidaCampeonatoEquipeBId
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
    return <ListPartidaCampeonatoesQuery>response.data.listPartidaCampeonatoes;
  }
  async PartidaCampeonatoesByCampeonatoID(
    campeonatoID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelPartidaCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PartidaCampeonatoesByCampeonatoIDQuery> {
    const statement = `query PartidaCampeonatoesByCampeonatoID($campeonatoID: ID!, $sortDirection: ModelSortDirection, $filter: ModelPartidaCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        partidaCampeonatoesByCampeonatoID(
          campeonatoID: $campeonatoID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            tipoPartida
            campeonatoID
            createdAt
            updatedAt
            partidaCampeonatoEquipeAId
            partidaCampeonatoEquipeBId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      campeonatoID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <PartidaCampeonatoesByCampeonatoIDQuery>(
      response.data.partidaCampeonatoesByCampeonatoID
    );
  }
  async GetEquipeCampeonato(id: string): Promise<GetEquipeCampeonatoQuery> {
    const statement = `query GetEquipeCampeonato($id: ID!) {
        getEquipeCampeonato(id: $id) {
          __typename
          id
          nome
          pais
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
          }
          JogadoresCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          equipeCampeonatoCampeonatoId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEquipeCampeonatoQuery>response.data.getEquipeCampeonato;
  }
  async ListEquipeCampeonatoes(
    filter?: ModelEquipeCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEquipeCampeonatoesQuery> {
    const statement = `query ListEquipeCampeonatoes($filter: ModelEquipeCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        listEquipeCampeonatoes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
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
    return <ListEquipeCampeonatoesQuery>response.data.listEquipeCampeonatoes;
  }
  async GetJogadoresCampeonato(
    id: string
  ): Promise<GetJogadoresCampeonatoQuery> {
    const statement = `query GetJogadoresCampeonato($id: ID!) {
        getJogadoresCampeonato(id: $id) {
          __typename
          id
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
          }
          classificacao
          equipecampeonatoID
          createdAt
          updatedAt
          jogadoresCampeonatoCampeonatoId
          jogadoresCampeonatoJogadoresId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJogadoresCampeonatoQuery>response.data.getJogadoresCampeonato;
  }
  async ListJogadoresCampeonatoes(
    filter?: ModelJogadoresCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJogadoresCampeonatoesQuery> {
    const statement = `query ListJogadoresCampeonatoes($filter: ModelJogadoresCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        listJogadoresCampeonatoes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
    return <ListJogadoresCampeonatoesQuery>(
      response.data.listJogadoresCampeonatoes
    );
  }
  async JogadoresCampeonatoesByEquipecampeonatoID(
    equipecampeonatoID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelJogadoresCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<JogadoresCampeonatoesByEquipecampeonatoIDQuery> {
    const statement = `query JogadoresCampeonatoesByEquipecampeonatoID($equipecampeonatoID: ID!, $sortDirection: ModelSortDirection, $filter: ModelJogadoresCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        jogadoresCampeonatoesByEquipecampeonatoID(
          equipecampeonatoID: $equipecampeonatoID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      equipecampeonatoID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <JogadoresCampeonatoesByEquipecampeonatoIDQuery>(
      response.data.jogadoresCampeonatoesByEquipecampeonatoID
    );
  }
  async GetCampeonato(id: string): Promise<GetCampeonatoQuery> {
    const statement = `query GetCampeonato($id: ID!) {
        getCampeonato(id: $id) {
          __typename
          id
          nome
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          icone
          data
          PartidaCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          campeonatoGrupoId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCampeonatoQuery>response.data.getCampeonato;
  }
  async ListCampeonatoes(
    filter?: ModelCampeonatoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCampeonatoesQuery> {
    const statement = `query ListCampeonatoes($filter: ModelCampeonatoFilterInput, $limit: Int, $nextToken: String) {
        listCampeonatoes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
    return <ListCampeonatoesQuery>response.data.listCampeonatoes;
  }
  async GetJogadoresPelada(id: string): Promise<GetJogadoresPeladaQuery> {
    const statement = `query GetJogadoresPelada($id: ID!) {
        getJogadoresPelada(id: $id) {
          __typename
          id
          Pelada {
            __typename
            id
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
          }
          Jogadores {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
          createdAt
          updatedAt
          peladaGrupoId
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
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
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
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
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
  OnCreateGolPartidaCampeonatoListener(
    filter?: ModelSubscriptionGolPartidaCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateGolPartidaCampeonato">
    >
  > {
    const statement = `subscription OnCreateGolPartidaCampeonato($filter: ModelSubscriptionGolPartidaCampeonatoFilterInput) {
        onCreateGolPartidaCampeonato(filter: $filter) {
          __typename
          id
          JogadoresGol {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          JogadoresAssistencia {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          partidacampeonatoID
          EquipeCampeonato {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          createdAt
          updatedAt
          golPartidaCampeonatoJogadoresGolId
          golPartidaCampeonatoJogadoresAssistenciaId
          golPartidaCampeonatoEquipeCampeonatoId
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
        Pick<__SubscriptionContainer, "onCreateGolPartidaCampeonato">
      >
    >;
  }

  OnUpdateGolPartidaCampeonatoListener(
    filter?: ModelSubscriptionGolPartidaCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateGolPartidaCampeonato">
    >
  > {
    const statement = `subscription OnUpdateGolPartidaCampeonato($filter: ModelSubscriptionGolPartidaCampeonatoFilterInput) {
        onUpdateGolPartidaCampeonato(filter: $filter) {
          __typename
          id
          JogadoresGol {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          JogadoresAssistencia {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          partidacampeonatoID
          EquipeCampeonato {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          createdAt
          updatedAt
          golPartidaCampeonatoJogadoresGolId
          golPartidaCampeonatoJogadoresAssistenciaId
          golPartidaCampeonatoEquipeCampeonatoId
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
        Pick<__SubscriptionContainer, "onUpdateGolPartidaCampeonato">
      >
    >;
  }

  OnDeleteGolPartidaCampeonatoListener(
    filter?: ModelSubscriptionGolPartidaCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteGolPartidaCampeonato">
    >
  > {
    const statement = `subscription OnDeleteGolPartidaCampeonato($filter: ModelSubscriptionGolPartidaCampeonatoFilterInput) {
        onDeleteGolPartidaCampeonato(filter: $filter) {
          __typename
          id
          JogadoresGol {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          JogadoresAssistencia {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
          }
          partidacampeonatoID
          EquipeCampeonato {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          createdAt
          updatedAt
          golPartidaCampeonatoJogadoresGolId
          golPartidaCampeonatoJogadoresAssistenciaId
          golPartidaCampeonatoEquipeCampeonatoId
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
        Pick<__SubscriptionContainer, "onDeleteGolPartidaCampeonato">
      >
    >;
  }

  OnCreatePartidaCampeonatoListener(
    filter?: ModelSubscriptionPartidaCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreatePartidaCampeonato">
    >
  > {
    const statement = `subscription OnCreatePartidaCampeonato($filter: ModelSubscriptionPartidaCampeonatoFilterInput) {
        onCreatePartidaCampeonato(filter: $filter) {
          __typename
          id
          EquipeA {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          EquipeB {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          tipoPartida
          GolPartidaCampeonatoes {
            __typename
            nextToken
          }
          campeonatoID
          createdAt
          updatedAt
          partidaCampeonatoEquipeAId
          partidaCampeonatoEquipeBId
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
        Pick<__SubscriptionContainer, "onCreatePartidaCampeonato">
      >
    >;
  }

  OnUpdatePartidaCampeonatoListener(
    filter?: ModelSubscriptionPartidaCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdatePartidaCampeonato">
    >
  > {
    const statement = `subscription OnUpdatePartidaCampeonato($filter: ModelSubscriptionPartidaCampeonatoFilterInput) {
        onUpdatePartidaCampeonato(filter: $filter) {
          __typename
          id
          EquipeA {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          EquipeB {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          tipoPartida
          GolPartidaCampeonatoes {
            __typename
            nextToken
          }
          campeonatoID
          createdAt
          updatedAt
          partidaCampeonatoEquipeAId
          partidaCampeonatoEquipeBId
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
        Pick<__SubscriptionContainer, "onUpdatePartidaCampeonato">
      >
    >;
  }

  OnDeletePartidaCampeonatoListener(
    filter?: ModelSubscriptionPartidaCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeletePartidaCampeonato">
    >
  > {
    const statement = `subscription OnDeletePartidaCampeonato($filter: ModelSubscriptionPartidaCampeonatoFilterInput) {
        onDeletePartidaCampeonato(filter: $filter) {
          __typename
          id
          EquipeA {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          EquipeB {
            __typename
            id
            nome
            pais
            createdAt
            updatedAt
            equipeCampeonatoCampeonatoId
          }
          tipoPartida
          GolPartidaCampeonatoes {
            __typename
            nextToken
          }
          campeonatoID
          createdAt
          updatedAt
          partidaCampeonatoEquipeAId
          partidaCampeonatoEquipeBId
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
        Pick<__SubscriptionContainer, "onDeletePartidaCampeonato">
      >
    >;
  }

  OnCreateEquipeCampeonatoListener(
    filter?: ModelSubscriptionEquipeCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateEquipeCampeonato">
    >
  > {
    const statement = `subscription OnCreateEquipeCampeonato($filter: ModelSubscriptionEquipeCampeonatoFilterInput) {
        onCreateEquipeCampeonato(filter: $filter) {
          __typename
          id
          nome
          pais
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
          }
          JogadoresCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          equipeCampeonatoCampeonatoId
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
        Pick<__SubscriptionContainer, "onCreateEquipeCampeonato">
      >
    >;
  }

  OnUpdateEquipeCampeonatoListener(
    filter?: ModelSubscriptionEquipeCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateEquipeCampeonato">
    >
  > {
    const statement = `subscription OnUpdateEquipeCampeonato($filter: ModelSubscriptionEquipeCampeonatoFilterInput) {
        onUpdateEquipeCampeonato(filter: $filter) {
          __typename
          id
          nome
          pais
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
          }
          JogadoresCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          equipeCampeonatoCampeonatoId
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
        Pick<__SubscriptionContainer, "onUpdateEquipeCampeonato">
      >
    >;
  }

  OnDeleteEquipeCampeonatoListener(
    filter?: ModelSubscriptionEquipeCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteEquipeCampeonato">
    >
  > {
    const statement = `subscription OnDeleteEquipeCampeonato($filter: ModelSubscriptionEquipeCampeonatoFilterInput) {
        onDeleteEquipeCampeonato(filter: $filter) {
          __typename
          id
          nome
          pais
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
          }
          JogadoresCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          equipeCampeonatoCampeonatoId
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
        Pick<__SubscriptionContainer, "onDeleteEquipeCampeonato">
      >
    >;
  }

  OnCreateJogadoresCampeonatoListener(
    filter?: ModelSubscriptionJogadoresCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateJogadoresCampeonato">
    >
  > {
    const statement = `subscription OnCreateJogadoresCampeonato($filter: ModelSubscriptionJogadoresCampeonatoFilterInput) {
        onCreateJogadoresCampeonato(filter: $filter) {
          __typename
          id
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
          }
          classificacao
          equipecampeonatoID
          createdAt
          updatedAt
          jogadoresCampeonatoCampeonatoId
          jogadoresCampeonatoJogadoresId
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
        Pick<__SubscriptionContainer, "onCreateJogadoresCampeonato">
      >
    >;
  }

  OnUpdateJogadoresCampeonatoListener(
    filter?: ModelSubscriptionJogadoresCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateJogadoresCampeonato">
    >
  > {
    const statement = `subscription OnUpdateJogadoresCampeonato($filter: ModelSubscriptionJogadoresCampeonatoFilterInput) {
        onUpdateJogadoresCampeonato(filter: $filter) {
          __typename
          id
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
          }
          classificacao
          equipecampeonatoID
          createdAt
          updatedAt
          jogadoresCampeonatoCampeonatoId
          jogadoresCampeonatoJogadoresId
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
        Pick<__SubscriptionContainer, "onUpdateJogadoresCampeonato">
      >
    >;
  }

  OnDeleteJogadoresCampeonatoListener(
    filter?: ModelSubscriptionJogadoresCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteJogadoresCampeonato">
    >
  > {
    const statement = `subscription OnDeleteJogadoresCampeonato($filter: ModelSubscriptionJogadoresCampeonatoFilterInput) {
        onDeleteJogadoresCampeonato(filter: $filter) {
          __typename
          id
          Campeonato {
            __typename
            id
            nome
            icone
            data
            createdAt
            updatedAt
            campeonatoGrupoId
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
          }
          classificacao
          equipecampeonatoID
          createdAt
          updatedAt
          jogadoresCampeonatoCampeonatoId
          jogadoresCampeonatoJogadoresId
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
        Pick<__SubscriptionContainer, "onDeleteJogadoresCampeonato">
      >
    >;
  }

  OnCreateCampeonatoListener(
    filter?: ModelSubscriptionCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCampeonato">>
  > {
    const statement = `subscription OnCreateCampeonato($filter: ModelSubscriptionCampeonatoFilterInput) {
        onCreateCampeonato(filter: $filter) {
          __typename
          id
          nome
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          icone
          data
          PartidaCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          campeonatoGrupoId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCampeonato">>
    >;
  }

  OnUpdateCampeonatoListener(
    filter?: ModelSubscriptionCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCampeonato">>
  > {
    const statement = `subscription OnUpdateCampeonato($filter: ModelSubscriptionCampeonatoFilterInput) {
        onUpdateCampeonato(filter: $filter) {
          __typename
          id
          nome
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          icone
          data
          PartidaCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          campeonatoGrupoId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCampeonato">>
    >;
  }

  OnDeleteCampeonatoListener(
    filter?: ModelSubscriptionCampeonatoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCampeonato">>
  > {
    const statement = `subscription OnDeleteCampeonato($filter: ModelSubscriptionCampeonatoFilterInput) {
        onDeleteCampeonato(filter: $filter) {
          __typename
          id
          nome
          Grupo {
            __typename
            id
            nome
            icon
            createdAt
            updatedAt
          }
          icone
          data
          PartidaCampeonatoes {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          campeonatoGrupoId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCampeonato">>
    >;
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
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
          }
          Jogadores {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
          }
          Jogadores {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
            qntJogadores
            duracaoPartida
            createdAt
            updatedAt
            peladaGrupoId
          }
          Jogadores {
            __typename
            id
            classificacao
            equipecampeonatoID
            createdAt
            updatedAt
            jogadoresCampeonatoCampeonatoId
            jogadoresCampeonatoJogadoresId
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
          createdAt
          updatedAt
          peladaGrupoId
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
          createdAt
          updatedAt
          peladaGrupoId
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
          createdAt
          updatedAt
          peladaGrupoId
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
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
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
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
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
          time
          aniversario
          escudo
          posicao
          createdAt
          updatedAt
          jogadoresGrupoId
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
