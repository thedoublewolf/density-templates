import $ from 'jquery';
import 'bootstrap-sass';

$('.tab-policies').click( function () {
  $('.tab-policies').addClass('active');
  $('.tab-terms').removeClass('active');
  $('.tab-notes').removeClass('active');
  $('.tab-analysis').removeClass('active');
  $('#policies').removeClass('hidden');
  $('#terms').addClass('hidden');
  $('#notes').addClass('hidden');
  $('#analysis').addClass('hidden');
});

$('.tab-terms').click( function () {
  $('.tab-terms').addClass('active');
  $('.tab-notes').removeClass('active');
  $('.tab-analysis').removeClass('active');
  $('.tab-policies').removeClass('active');
  $('#terms').removeClass('hidden');
  $('#notes').addClass('hidden');
  $('#analyis').addClass('hidden');
  $('#policies').addClass('hidden');
});

$('.tab-notes').click( function () {
  $('.tab-notes').addClass('active');
  $('.tab-analysis').removeClass('active');
  $('.tab-policies').removeClass('active');
  $('.tab-terms').removeClass('active');
  $('#notes').removeClass('hidden');
  $('#analysis').addClass('hidden');
  $('#policies').addClass('hidden');
  $('#terms').addClass('hidden');
});

$('.tab-analysis').click( function () {
  $('.tab-analysis').addClass('active');
  $('.tab-policies').removeClass('active');
  $('.tab-terms').removeClass('active');
  $('.tab-notes').removeClass('active');
  $('#analysis').removeClass('hidden');
  $('#policies').addClass('hidden');
  $('#terms').addClass('hidden');
  $('#notes').addClass('hidden');
});