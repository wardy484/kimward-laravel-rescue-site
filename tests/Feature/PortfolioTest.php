<?php

namespace Tests\Feature;

use Tests\TestCase;

class PortfolioTest extends TestCase
{
    public function test_the_portfolio_is_rendered_with_contact_and_project_links(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('Thoughtful code.')
            ->assertSee('Useful things.')
            ->assertSee('mailto:hello@kimward.co.uk', false)
            ->assertSee('Strong Girl Society')
            ->assertSee('Plates & Plans', false)
            ->assertSee('Fulfiliates')
            ->assertSee('https://www.upwork.com/freelancers/kimward4', false);
    }

    public function test_the_portfolio_has_personal_metadata_for_the_canonical_domain(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('<link rel="canonical" href="https://kimward.co.uk/">', false)
            ->assertSee('"@type": "Person"', false)
            ->assertSee('https://kimward.co.uk/social-card.png', false);
    }

    public function test_the_retired_service_page_is_no_longer_available(): void
    {
        $this->get('/shopify-reconciliation-report')->assertNotFound();
    }

    public function test_assets_use_https_behind_the_hosting_proxy(): void
    {
        $this->withHeaders([
            'Host' => 'kimward.co.uk',
            'X-Forwarded-Proto' => 'https',
        ])->get('/')
            ->assertOk()
            ->assertSee('href="https://kimward.co.uk/build/assets/', false)
            ->assertDontSee('href="http://', false);
    }
}
