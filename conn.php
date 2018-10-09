<?php

  include 'condb.php';

  $sql_create_apply_form = "create table if not exists `apply_form`(
    `id` INT( 10 ) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `user_id` VARCHAR(50) DEFAULT NULL COMMENT 'Domain ユーザーのID',
    `user_name` NVARCHAR(20) NOT NULL,
    `user_department` NVARCHAR(20) NOT NULL,
    `user_class` NVARCHAR(20) NOT NULL,
    `user_type` NVARCHAR(20) NOT NULL,
    `user_in` DATE DEFAULT NULL,
    `user_out` DATE DEFAULT NULL,
    `user_change` DATE DEFAULT NULL,
    `user_pause` DATE DEFAULT NULL,
    `admin_num` INT( 5 ) UNSIGNED NOT NULL,
    `user_reason` VARCHAR(50) DEFAULT NULL COMMENT '申請理由',
    `type_user` TINYINT(1) DEFAULT 0,
    `type_terminal` TINYINT(1) DEFAULT 0,
    `type_sharefolder` TINYINT(1) DEFAULT 0,
    `type_sharemail` TINYINT(1) DEFAULT 0,
    `depart_is_good` TINYINT(1) DEFAULT 2 COMMENT '部門長許可するかどうかを判断する',
    `human_is_good` TINYINT(1) DEFAULT 2 COMMENT '人事部許可するかどうかを判断する',
    `ceo_is_good` TINYINT(1) DEFAULT 2 COMMENT '社長許可するかどうかを判断する',
    `is_good` TINYINT(1) DEFAULT 2 COMMENT 'システム部許可するかどうかを判断する',
    `not_allowed_reason` VARCHAR(50) DEFAULT NULL COMMENT '不許可の理由',
    `is_apperant` TINYINT(1) DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

  $sql_create_type_user_form = "create table if not exists `type_user_form`(
    `id` INT( 10 ) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `u_id` INT( 10 ) UNSIGNED NOT NULL,
    `acount_check` TINYINT(1) DEFAULT 0,
    `username_kanji` NVARCHAR(20) NOT NULL,
    `username_kana` NVARCHAR(20) NOT NULL,
    `username_roma` NVARCHAR(20) NOT NULL,
    `user_department` NVARCHAR(20) NOT NULL,
    `account_start` DATE DEFAULT NULL,
    `mail_check` TINYINT(1) DEFAULT 0,
    `mail_start` DATE DEFAULT 0,
    `click_check` TINYINT(1) DEFAULT 0,
    `click_start` DATE DEFAULT 0,
    `tfx_check` TINYINT(1) DEFAULT 0,
    `tfx_start` DATE DEFAULT 0,
    `quick_check` TINYINT(1) DEFAULT 0,
    `quick_start` DATE DEFAULT 0,
    `bloomberg_check` TINYINT(1) DEFAULT 0,
    `bloomberg_start` DATE DEFAULT 0,
    `reuters_check` TINYINT(1) DEFAULT 0,
    `reuters_start` DATE DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

  $sql_create_type_terminal_form = "create table if not exists `type_terminal_form`(
    `id` INT( 10 ) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `u_id` INT( 10 ) UNSIGNED NOT NULL,
    `pc_check` TINYINT(1) DEFAULT 0,
    `pc_start` DATE DEFAULT 0,
    `note_check` TINYINT(1) DEFAULT 0,
    `desktop_check` TINYINT(1) DEFAULT 0,
    `ipad_check` TINYINT(1) DEFAULT 0,
    `ipad_start` DATE DEFAULT 0,
    `phone_check` TINYINT(1) DEFAULT 0,
    `phone_start` DATE DEFAULT 0,
    `smart_check` TINYINT(1) DEFAULT 0,
    `feature_check` TINYINT(1) DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

  $sql_create_type_sharefolder_form = "create table if not exists `type_sharefolder_form`(
    `id` INT( 10 ) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `u_id` INT( 10 ) UNSIGNED NOT NULL,
    `create_check` TINYINT(1) DEFAULT 0,
    `folder_name` NVARCHAR(30) NOT NULL,
    `folder_place` NVARCHAR(20) NOT NULL,
    `folder_spec` NVARCHAR(20) DEFAULT NULL,
    `folder_item` NVARCHAR(20) DEFAULT NULL,
    `access_check` TINYINT(1) DEFAULT 0,
    `access_folder_name` NVARCHAR(30) DEFAULT NULL,
    `edit_check` TINYINT(1) DEFAULT 0,
    `read_check` TINYINT(1) DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

  $sql_create_type_sharemail_form = "create table if not exists `type_sharemail_form`(
    `id` INT( 10 ) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `u_id` INT( 10 ) UNSIGNED NOT NULL,
    `mail_account` VARCHAR(50) NOT NULL,
    `mail_item` NVARCHAR(20) DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

  try {
    $pdo->exec($sql_create_apply_form);
    $pdo->exec($sql_create_type_user_form);
    $pdo->exec($sql_create_type_terminal_form);
    $pdo->exec($sql_create_type_sharefolder_form);
    $pdo->exec($sql_create_type_sharemail_form);
  }catch(PDOException $e){
    echo die("Tables created false: " . $e->getMessage());
  }

?>
