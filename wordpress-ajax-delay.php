<?php
/**
 * Plugin Name:  WordPress AJAX Delay
 * Plugin URI:   https://github.com/rsusanto/wordpress-ajax-delay
 * Description:  A WordPress plugin to simulate a slow network by delaying firing AJAX response handlers.
 * Author:       Rudy Susanto
 * Author URI:   https://rsusanto.com
 * Version:      0.1
 * License:      MIT
 * Text Domain:  wordpress-ajax-delay
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_script(
		'wordpress-ajax-delay',
		plugins_url( 'script.js', __FILE__ ),
		[ 'jquery' ],
		'0.1'
	);
} );
