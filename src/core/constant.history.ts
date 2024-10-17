export enum ActionName {
  // Comment
  CREATE_COMMENT = "CREATE_COMMENT",
  UPDATE_COMMENT = "UPDATE_COMMENT",
  DELETE_COMMENT = "DELETE_COMMENT",

  // Profile
  UPDATE_PROFILE = "UPDATE_PROFILE",

  // Role
  UPDATE_ROLE = "UPDATE_ROLE",
  DELETE_ROLE = "DELETE_ROLE",
  CREATE_ROLE = "CREATE_ROLE",

  // User
  CREATE_USER = "CREATE_USER",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",
  ENABLE_USER = "ENABLE_USER",
  DISABLE_USER = "DISABLE_USER",

  // Setting
  UPDATE_SETTING = "UPDATE_SETTING",

  // Service
  DISABLE_SERVICE = "DISABLE_SERVICE",
  ENABLE_SERVICE = "ENABLE_SERVICE",
  UPDATE_SERVICE = "UPDATE_SERVICE",
  CREATE_SERVICE = "CREATE_SERVICE",

  //Window
  DISABLE_WINDOW = "DISABLE_WINDOW",
  ENABLE_WINDOW = "ENABLE_WINDOW",

  UPDATE_WINDOW = "UPDATE_WINDOW",
  CREATE_WINDOW = "CREATE_WINDOW",

  //Access Level
  UPDATE_ACCESS_LEVEL = "UPDATE_ACCESS_LEVEL",
  CREATE_ACCESS_LEVEL = "CREATE_ACCESS_LEVEL",

  //Window Type
  UPDATE_WINDOW_TYPE = "UPDATE_WINDOW_TYPE",
  CREATE_WINDOW_TYPE = "CREATE_WINDOW_TYPE",

  //Window
  UPDATE_DISPLAY = "UPDATE_DISPLAY",
  CREATE_DISPLAY = "CREATE_DISPLAY",
}

export enum EntityName {
  USER = "USER",
  ROLE = "ROLE",
  SETTING = "SETTING",
  SERVICE = "SERVICE",
  WINDOW = "WINDOW",
  ACCESS_LEVEL = "ACCESS_LEVEL",
  WINDOW_TYPE = "WINDOW_TYPE",
  DISPLAY = "DISPLAY",
}

export enum TranslateAction {
  // ACTION NAME
  CREATE = "ajouté",
  UPDATE = "modifié",
  DELETE = "supprimé",
  DISABLE = "désactivé",
  ENABLE = "activé",
  REPLACE = "remplacer",
}

export enum TranslateEntity {
  // ENTITY NAME
  COMMENT = "un commentaire ",
  USER = "cet utilisateur",
  ROLE = "un rôle",
  ADMIN = "ce personnel administrateur",
  SESSION = "une séance",

  DISPLAY = "une affichage",
  SERVICE = "une service",
  WINDOW = "une guichet",
  WINDOW_TYPE = "une type de guichet",
  SETTING = "les paramètres",
  ACCESS_LEVEL = "une privilège",
}
export enum ActionType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
  REPLACE = "REPLACE",
}

export const translateActionName = (action: string) => {
  const actionType = action.split("_")[0];
  switch (actionType) {
    case ActionType.CREATE:
      return TranslateAction.CREATE;
    case ActionType.UPDATE:
      return TranslateAction.UPDATE;
    case ActionType.DELETE:
      return TranslateAction.DELETE;
    case ActionType.DISABLE:
      return TranslateAction.DISABLE;
    case ActionType.ENABLE:
      return TranslateAction.ENABLE;
    default:
      return "fait une modification";
  }
};

export const translateEntityName = (action: string) => {
  const entity = action.split("_")[1];
  const entityName2 = action.split("_")[2];
  switch (entity) {
    case EntityName.ACCESS_LEVEL:
      return TranslateEntity.ACCESS_LEVEL;
    case EntityName.DISPLAY:
      return TranslateEntity.DISPLAY;
    case EntityName.USER:
      return TranslateEntity.USER;
    case EntityName.ROLE:
      return TranslateEntity.ROLE;
    case EntityName.SERVICE:
      return TranslateEntity.SERVICE;
    case EntityName.SETTING:
      return TranslateEntity.SETTING;
    case EntityName.WINDOW:
      return entityName2 ? TranslateEntity.WINDOW_TYPE : TranslateEntity.WINDOW;
    default:
      return "";
  }
};
